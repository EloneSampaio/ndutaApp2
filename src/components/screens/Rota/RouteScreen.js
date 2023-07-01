import React, {useState, useEffect, useRef} from 'react';
import {View, Alert, AppState} from 'react-native';
import Menu from '../../common/myCommon/menu';
import styles from './styles/estilo';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import PriceModal from './PriceModal';
import {useRoute, useNavigation} from '@react-navigation/native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {useGetPrecoMutation} from '../../../features/user/services/userService';
import {useGetTarifasAllQuery} from '../../../features/servico/services/servicoService';

const RouteScreen = () => {
  const token = useSelector(state => state.auth.token);
  const [selectedItem, setSelectedItem] = useState(null);
  const mapViewRef = useRef(null);
  const origem = useSelector(state => state.common.inputValueOrigem);
  const destino = useSelector(state => state.common.inputValueDestino);
  const [rotaCoordinates, setRotaCoordinates] = useState([]);
  const [distanciaCorrida, setDistanciaCorrida] = useState('');
  const [duracaoCorrida, setDuracaoCorrida] = useState('');
  const [appState, setAppState] = useState(AppState.currentState);
  const [modalPriceVisible, setModalPriceVisible] = useState(false);
  const [isMapRendered, setIsMapRendered] = useState(false);
  const navigation = useNavigation();
  const {data: tarifas = [], refetch} = useGetTarifasAllQuery(null, {
    skip: !token,
  });

  console.log('>>> Tarifas:', tarifas);
  console.log('>>>>>>>>> Renderizando RouteScreen');

  const origemCoords = origem
    ? {latitude: parseFloat(origem.lat), longitude: parseFloat(origem.lng)}
    : null;
  const destinationCoords = destino
    ? {latitude: parseFloat(destino.lat), longitude: parseFloat(destino.lng)}
    : null;

  console.log('>>>>>>>.Origem', origemCoords);
  console.log('>>>>>>>.Destino', destinationCoords);

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _handleAppStateChange = nextAppState => {
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!');
      // App came to the foreground (from background or inactive state)
    } else {
      console.log('App went to the background!');
      // App went to the background
      setModalPriceVisible(false);
    }
    setAppState(nextAppState);
  };
  useEffect(() => {
    refetch();

    if (rotaCoordinates.length > 0 && mapViewRef.current) {
      const coordinates = rotaCoordinates.map(c => ({
        latitude: parseFloat(c.latitude),
        longitude: parseFloat(c.longitude),
      }));

      mapViewRef.current.fitToCoordinates(coordinates, {
        edgePadding: {top: 100, right: 100, bottom: 100, left: 100},
        animated: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rotaCoordinates]);

  const showPriceModal = () => {
    setModalPriceVisible(true);
  };

  const fetchRoute = async () => {
    if (!origem || !destino) {
      return;
    }

    try {
      const url = `http://65.108.158.105:8081/ors/v2/directions/driving-car?start=${origemCoords.longitude},${origemCoords.latitude}&end=${destinationCoords.longitude},${destinationCoords.latitude}`;
      const response = await axios.get(url);
      console.log(url);
      const coordenadas = response.data;
      console.log('>>>>>.API:', coordenadas);
      const coordinates = coordenadas.features[0].geometry.coordinates.map(
        c => ({
          latitude: parseFloat(c[1]),
          longitude: parseFloat(c[0]),
        }),
      );

      const distancia = coordenadas.features[0].properties.summary.distance;
      const duration = coordenadas.features[0].properties.summary.duration;
      setRotaCoordinates(coordinates);
      setDistanciaCorrida(distancia);
      setDuracaoCorrida(duration);

      console.log('>>>>>>>> DISTANCIA: ' + distancia);
      console.log('>>>>>>>>>> DURATION:  ' + duration);
    } catch (error) {
      console.error('Erro na chamada da API:', error);
      Alert.alert(
        'Erro',
        'Não foi possível obter a rota. Por favor, tente novamente mais tarde.',
      );
    }
  };

  useEffect(() => {
    setIsMapRendered(true);
    fetchRoute();
    showPriceModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddServicos = item => {
    setSelectedItem(item);
    navigation.navigate('ProcessandoPedido', {
      itemSelecionado: item,
      distancia: distanciaCorrida,
      duracao: duracaoCorrida,
    });
  };

  return (
    <View style={styles.container}>
      <Menu />
      {origemCoords && destinationCoords && (
        <MapView
          ref={mapViewRef}
          style={styles.map}
          initialRegion={{
            latitude: origemCoords.latitude,
            longitude: origemCoords.longitude,
            latitudeDelta: 0.007,
            longitudeDelta: 0.026,
          }}
          onLayout={() => setIsMapRendered(true)}>
          {origemCoords && origemCoords.latitude && origemCoords.longitude && (
            <Marker coordinate={origemCoords} title="Posição atual" />
          )}

          {destinationCoords &&
            destinationCoords.latitude &&
            destinationCoords.longitude && (
              <Marker
                coordinate={destinationCoords}
                title={'Destino'}
                pinColor="#008000"
              />
            )}

          {rotaCoordinates.length > 0 && (
            <Polyline
              coordinates={rotaCoordinates}
              strokeColor="#FF0000"
              strokeWidth={3}
            />
          )}
        </MapView>
      )}
      {isMapRendered && rotaCoordinates.length > 0 && (
        <PriceModal
          visible={modalPriceVisible}
          options={tarifas}
          handleAddServicos={handleAddServicos}
        />
      )}
    </View>
  );
};

export default RouteScreen;
