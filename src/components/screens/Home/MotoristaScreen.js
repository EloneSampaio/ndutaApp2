import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker} from 'react-native-maps';
import {useGetMotoristaByIdQuery} from '../../../features/motorista/services/motoristaService';

import Menu from '../../common/myCommon/menu';
import InformacoesMotorista from './InformacoesMotorista';
import styles from './style/estilo';
import {resetCorrida} from '../../../features/common/commonSlice';

const Motorista = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const token = useSelector(state => state.auth.token);
  const corrida = useSelector(state => state.common.corridaInfo);
  const dispatch = useDispatch();

  console.log('DADOS DO MOTORISTA AQUI: ', corrida);
  const {data: dados} = useGetMotoristaByIdQuery(corrida?.motorista_id, {
    skip: !token,
  });

  console.log('>>>>>>> DADOS DO MOTORISTA: ', dados);
  useEffect(() => {
    dispatch(resetCorrida());

    Geolocation.getCurrentPosition(
      position => setCurrentLocation(position),
      error => console.error(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!currentLocation) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Menu />

      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.007,
          longitudeDelta: 0.026,
        }}>
        <Marker coordinate={currentLocation.coords} title="Posição atual" />
      </MapView>

      {dados && (
        <InformacoesMotorista
          motoristaNome={dados?.motorista.nome}
          viatura={dados?.veiculos[0].marca}
          cor={dados?.veiculos[0].cor}
          telefone={dados?.motorista.telefone}
          placa={dados?.veiculos[0].placa}
        />
      )}
    </View>
  );
};

export default Motorista;
