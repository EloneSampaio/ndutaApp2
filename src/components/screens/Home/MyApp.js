import React, {useEffect} from 'react';
import Pusher from 'pusher-js/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ApplicationProperties} from '../../../application.properties';
import {Text, View} from 'react-native';
import {corridaInfo} from '../../../features/common/commonSlice';
import {useDispatch, useSelector} from 'react-redux';

const MyComponent = () => {
  const dispatch = useDispatch();
  const corrida = useSelector(state => state.common.corridaInfo);
  console.log('>>>>>>>>> DADOS DA CORRIDA :  ' + corrida);
  console.log('>>>>>>>>> STATUS DA CORRIDA :  ' + corrida?.status);

  useEffect(() => {
    const initializePusher = async () => {
      const token = await AsyncStorage.getItem('token');
      console.log('>>>>>>>>>WEBSTOKEN: ' + token);
      if (!token) {
        console.error('No authentication token found');
        return;
      }

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
        console.log('Conectado ao servidor Pusher');
        // Agora você está conectado ao servidor Pusher
        // Faça qualquer operação necessária aqui

        subscribeToPrivateChannel(pusher);
        subscribeToPublicChannel(pusher);
      });

      pusher.connect();
    };

    initializePusher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const solicitacaoId = 47;

  const subscribeToPrivateChannel = pusher => {
    // Inscreva-se no canal privado específico da solicitação
    const channelCorrida = pusher.subscribe(
      `solicitacao.status.${solicitacaoId}`,
    );

    // Adicione um evento de "conexão estabelecida" ao canal
    channelCorrida.bind('pusher:subscription_succeeded', () => {
      console.log('Conectado ao canal motorista');
    });

    // Adicione um evento de "conexão falhou" ao canal
    channelCorrida.bind('pusher:subscription_error', () => {
      console.log('Falha ao conectar ao canal privado');
    });

    channelCorrida.bind('solicitacao', data => {
      console.log('Received event from "solicitacao" channel:', data);
      console.log('Dados: ', data.solicitacao);
      dispatch(corridaInfo(data.solicitacao));

      // Trate o evento recebido do canal privado "solicitacao" aqui
    });
  };

  const subscribeToPublicChannel = pusher => {
    const channel = pusher.subscribe('notificacoes');

    // Adicione um evento de "conexão estabelecida" ao canal
    channel.bind('pusher:subscription_succeeded', () => {
      console.log('Conectado ao canal chat');
    });

    channel.bind('notificacoes', data => {
      console.log('Received event from "solicitacao" channel:', data);
      // Trate o evento recebido do canal privado "solicitacao" aqui
    });
  };

  return (
    <View>
      <Text>Exemplo de uso de Pusher no React Native</Text>
    </View>
  );
};

export default MyComponent;
