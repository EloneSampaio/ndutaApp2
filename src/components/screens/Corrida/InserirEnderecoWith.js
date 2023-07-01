import React, {useState, useEffect, useRef} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {Icon, Input} from 'react-native-elements';
import {useGetUserDataQuery} from '../../../features/user/services/userService';
import {setDadosCorrida} from '../../../features/common/commonSlice';
import styles from './style/InserirEnderecoEstilo';
import Menu from './parts/menu';
import DestinoModal from '../Rota/DestinoModal';

const InserirEnderecoWith = () => {
  console.log('Executou');

  const navigation = useNavigation();
  const route = useRoute();

  const [destinoInputValue, setDestinoInputValue] = useState('');
  const inputRef = useRef(null);
  const [hasInputBeenFocused, setHasInputBeenFocused] = useState(false);

  const tipoCategoriaServico = route.params?.tipoServico || '';

  const [isModalVisible, setModalVisible] = useState(false);

  /* PEGA O NAME DO USER E PASSA NO CAMPO 'usuario, Para Onde Vais' */
  const token = useSelector(state => state.auth.token);
  const inputValueOrigem = useSelector(state => state.common.inputValueOrigem);
  const inputValueDestino = useSelector(
    state => state.common.inputValueDestino,
  );

  const {data: user} = useGetUserDataQuery(null, {
    skip: !token,
  });

  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);

  const tipoVeiculoId = route.params?.tipoVeiculoId || 0;
  const idServico = route.params?.idServico || 0;
  console.log(route.params);
  console.log('>>>>> Item selecionado idServicoSelecionado:', idServico);
  console.log('>>>>> Item selecionado tipoVeiculoId:', tipoVeiculoId);

  const handleOpenModal = () => {
    if (!hasInputBeenFocused) {
      setHasInputBeenFocused(true);
      inputRef.current.blur();
    }
    setModalVisible(true);
  };

  const handleCloseModal = novoValorDestino => {
    setModalVisible(false);
    setHasInputBeenFocused(false);
    setDestinoInputValue(novoValorDestino);
    setDadosCorrida({idCategoriaServico: tipoCategoriaServico});
    console.log('>>>>>. ANTES');
    navigation.navigate('RouteScreen');
    console.log('>>>>>. DEPOIS');

    console.log('A rota atual é', route);
    console.log('O estado da navegação é', navigation);
  };

  //calculando preco

  const NameUser = user?.user?.name || '';

  useEffect(() => {
    Geolocation.getCurrentPosition(
      async position => {
        setCurrentLocation(position);
      },
      err => {
        setLocationError(err.message);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  useEffect(() => {
    console.log('>>>>>>> WithEndereco:' + destinoInputValue.name);
    if (isModalVisible === false) {
      console.log('MODAL JANELA FECHADA');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValueDestino, inputValueOrigem, isModalVisible, navigation]);

  return (
    <View style={styles.container}>
      <Menu />

      {currentLocation && (
        <MapView
          style={styles.map}
          initialRegion={{
            ...currentLocation.coords,
            latitudeDelta: 0.007,
            longitudeDelta: 0.026,
          }}>
          {currentLocation && (
            <Marker coordinate={currentLocation.coords} title="Posição atual" />
          )}
        </MapView>
      )}

      <View>
        <View style={styles.header}>
          <Text style={styles.NomeUser}>{NameUser}, Para Onde Vais?</Text>
        </View>
        <Input
          value={destinoInputValue.name}
          ref={inputRef}
          containerStyle={styles.modalContainer}
          inputStyle={styles.AddressInput}
          placeholder="Digite o destino"
          onFocus={handleOpenModal}
          leftIcon={<Icon name="place" size={20} color="green" />}
        />
        <DestinoModal visible={isModalVisible} onClose={handleCloseModal} />
      </View>
    </View>
  );
};

export default InserirEnderecoWith;
