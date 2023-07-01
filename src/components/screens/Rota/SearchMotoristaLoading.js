/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Pusher from 'pusher-js/react-native';
import MapaScreen from '../Corrida/MapaScreen';
import {
  corridaInfo,
  resetCorrida,
  setDadosCorrida,
  statusCorrida,
} from '../../../features/common/commonSlice';
import MenuSuperiorLoading from '../Home/parts/MenuSuperiorLoading';
import {useGetUserDataQuery} from '../../../features/user/services/userService';
import {useAddSolicitacaoMutation} from '../../../features/servico/services/servicoService';
import {ApplicationProperties} from '../../../application.properties';

const SearchMotoristaLoading = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  const token = useSelector(state => state.auth.token);
  const status = useSelector(state => state.common.statusCorrida);
  const origem = useSelector(state => state.common.inputValueOrigem);
  const destino = useSelector(state => state.common.inputValueDestino);
  const [idSolicitacao, setIdSolicitacao] = useState(null);
  const [mystatusCorrida, setMyStatusCorrida] = useState(null);

  const {data: user} = useGetUserDataQuery(null, {skip: !token});

  const userId = user?.user?.id || '';
  const itemSelecionado = route.params?.itemSelecionado;
  const distanciaCorrida = route.params?.distancia;

  const [createSolicitacao, {isLoading, isError}] = useAddSolicitacaoMutation();

  const servicoData = useMemo(() => {
    console.log('>>>>>>>enviar dados :', itemSelecionado);
    const currentDateTime = new Date();
    return {
      cliente_id: Number(userId),
      servico_id: Number(itemSelecionado.id),
      data_hora: currentDateTime.toISOString().slice(0, 19),
      local_coleta: origem.name,
      origem: origem.name,
      destino: destino.name,
      status: 'pendente',
      distancia: Number(distanciaCorrida),
      longitude_coleta: origem.lng.toString(),
      latitude_coleta: origem.lat.toString(),
      longitude_destino: destino.lng.toString(),
      latitude_destino: destino.lat.toString(),
    };
  }, [userId, itemSelecionado, origem, destino, distanciaCorrida]);

  useEffect(() => {
    const subscribeToPrivateChannel = pusher => {
      if (idSolicitacao != null) {
        console.log('>>>>> ID SOLICITAÇÃO WEBSOCKET:', idSolicitacao);

        const channelCorrida = pusher.subscribe(
          `solicitacao.status.${idSolicitacao}`,
        );

        channelCorrida.bind('pusher:subscription_succeeded', () => {
          console.log('Conectado ao canal motorista');
        });

        channelCorrida.bind('pusher:subscription_error', () => {
          console.log('Falha ao conectar ao canal privado');
        });

        channelCorrida.bind('solicitacao', data => {
          console.log('>>>>>WEBSCOKET DATA: ', data);
          dispatch(corridaInfo(data?.solicitacao));
          dispatch(statusCorrida(data?.solicitacao.status));
        });
      }
    };

    const initializePusher = () => {
      const pusher = new Pusher(ApplicationProperties.APP_PUSHER_APP_KEY, {
        cluster: ApplicationProperties.pusherCluster,
        forceTLS: false,
        wsHost: ApplicationProperties.Url,
        wsPort: 6001,
        wssPort: 6001,
        authEndpoint: ApplicationProperties.UrlAuth,
        auth: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      });

      pusher.connection.bind('connected', () => {
        subscribeToPrivateChannel(pusher);
      });

      pusher.connect();
    };

    if (idSolicitacao != null) {
      initializePusher();
    }
  }, [idSolicitacao, token, dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await createSolicitacao(servicoData).unwrap();
        const {status: corridaStatus, id: solicitacaoId} = response.solicitacao;
        console.log('SOLICITACAO RETORNO:', response.solicitacao);
        console.log('>>>>> ID SOLICITAÇÃO:', solicitacaoId);
        dispatch(statusCorrida(corridaStatus));
        setIdSolicitacao(solicitacaoId);
      } catch (error) {
        console.error('rejected', error);
      }
    };

    fetchData();
  }, [createSolicitacao, servicoData, dispatch]);

  console.log(status);
  useEffect(() => {
    if (!isLoading && status === 'aceito') {
      setMyStatusCorrida('aceito');

      navigation.navigate('MotoristaScreen');
    } else if (status === 'rejeitado') {
      setMyStatusCorrida('rejeitado');
      dispatch(resetCorrida());

      // Handle rejected status here.
    } else if (status === 'pendente') {
      // Handle pending status here.
      setMyStatusCorrida('pendente');
    }
  }, [status, isLoading]);

  return (
    <View style={{flex: 1}}>
      <MenuSuperiorLoading />
      <MapaScreen />
      {mystatusCorrida === 'pendente' ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>
            Aguarde um instante, por favor...
          </Text>
          <ActivityIndicator
            size="large"
            color="#D6001B"
            style={styles.loadingIndicator}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 450,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  loadingText: {
    fontSize: 20,
    padding: 90,
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -50,
  },
  loadingIndicator: {
    flex: 1,
    marginTop: -50,
  },
});

export default SearchMotoristaLoading;
