import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import axios from 'axios';
import Geolocation from 'react-native-geolocation-service';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Icon, Input} from 'react-native-elements';
import {useGetUserDataQuery} from '../../../features/user/services/userService';
import {useUpdateUserInfoMutation} from '../../../features/user/services/userService';
import {useRoute} from '@react-navigation/native';
import styles from './style/InserirEnderecoEstilo';
import Menu from './parts/menu';
import {useAddServicosMutation} from '../../../features/servico/services/servicoService';

export default function App() {
  const navigation = useNavigation();

  const route = useRoute();
  const tipoServico = route.params?.tipoServico || '';

  const [destinationCoordinates, setDestinationCoordinates] = useState(null);

  const [modalVisibleP, setModalVisibleP] = useState(true);
  const [addServicos] = useAddServicosMutation(); //Solicitar servico

  /* PEGA O NAME DO USER E PASSA NO CAMPO 'usuario, Para Onde Vais' */
  const [updateUserInfo, {isLoad, isError, data}] = useUpdateUserInfoMutation();
  const token = useSelector(state => state.auth.token);

  const {
    data: user,
    error,
    isLoading,
  } = useGetUserDataQuery(null, {
    skip: !token,
  });
  // Estado para as coordenadas e localização atual
  const [initialCoords, setInitialCoords] = useState(null);
  const [currentPlace, setCurrentPlace] = useState('');
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);

  // Estado para o destino e coordenadas do destino
  const [destination, setDestination] = useState('');
  const [destinationCoords, setDestinationCoords] = useState(null);

  // Estado para sugestões e visibilidade do modal
  const [suggestions, setSuggestions] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // Estado para a corrida (distância, duração, coordenadas da rota)
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [routeCoordinates, setRouteCoordinates] = useState([]);

  // Estado para os dados do preço da corrida e modal
  const [showHelloModal, setShowHelloModal] = useState(false);
  const [showPrecoCorrida, setShowPrecoCorrida] = useState(false);

  useEffect(() => {
    // Verifica se a rota foi traçada (ou seja, se há coordenadas de destino)
    if (routeCoordinates.length > 0) {
      setShowPrecoCorrida(true);
    } else {
      setShowPrecoCorrida(false);
    }
  }, [routeCoordinates]);

  const apiKey = '5b3ce3597851110001cf6248fd3254fbd1b2437cbdd8ff1ad08261c4';

  const handleDestinationChange = async text => {
    setDestination(text);
    if (text) {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${text}&limit=5`;
      const response = await axios.get(url);
      const data = response.data;
      setSuggestions(data);
    } else {
      setSuggestions([]);
    }
  };

  const handleOriginChange = async text => {
    setCurrentPlace(text);
    if (text) {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${text}&limit=5`;
      const response = await axios.get(url);
      // eslint-disable-next-line no-shadow
      const data = response.data;
      setSuggestions(data);
    } else {
      setSuggestions([]);
    }
  };
  const handleSuggestionPress = async suggestion => {
    setDestination(suggestion.display_name);
    setSuggestions([]);

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${suggestion.display_name}&countrycodes=ao&city=Luanda&citydistrict=Luanda&limit=5`;

    const response = await axios.get(url);
    const data = response.data;
    const coordinates = {
      latitude: parseFloat(data[0].lat),
      longitude: parseFloat(data[0].lon),
    };

    // Atualiza as coordenadas da localização inicial com as coordenadas da sugestão selecionada
    setInitialCoords(coordinates);

    fetchRoute(coordinates); // utiliza as coordenadas atualizadas como ponto de partida
    setModalVisible(false);
  };

  const fetchRoute = async destinationCoords => {
    const start = initialCoords || currentLocation.coords;
    const end = destinationCoords;
    // Resto do código...
    const url = `http://65.108.158.105:8081/ors/v2/directions/driving-car?start=${start.longitude},${start.latitude}&end=${end.longitude},${end.latitude}`;
    const response = await axios.get(url);
    const data_sugest = response.data;

    const coordinates = data_sugest.features[0].geometry.coordinates.map(c => ({
      latitude: c[1],
      longitude: c[0],
    }));

    setDestinationCoordinates(end); // Armazena as coordenadas do destino na variável destinationCoordinates
    setRouteCoordinates(coordinates);

    setDistance(data_sugest.features[0].properties.segments[0].distance);
    setDuration(data_sugest.features[0].properties.segments[0].duration); //ele traz em segundos

    setDestinationCoords(end); // adiciona as coordenadas do destino ao estado
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(
      async position => {
        setCurrentLocation(position);
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
        );
        const place = response.data.display_name;
        setCurrentPlace(place);

        // Atualiza as coordenadas da localização inicial
        setInitialCoords(position.coords);
      },
      err => {
        setLocationError(err.message);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  useEffect(() => {
    // Verifica se a rota foi traçada (ou seja, se há coordenadas de destino)
    if (routeCoordinates.length > 0) {
      const timer = setTimeout(() => {
        setShowHelloModal(false);
      }, 5000); // 5 segundos

      return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado antes de 5 segundos
    }
  }, [routeCoordinates]);

  //calculando preco
  // eslint-disable-next-line no-shadow
  const calculatePrice = (distance, duration, dynamicFareFactor) => {
    const baseFare = 5.0;
    const pricePerKm = 1.5;
    const pricePerMinute = 0.25;

    const price = baseFare + distance * pricePerKm + duration * pricePerMinute;
    const totalPrice = price * dynamicFareFactor;

    const precoArredondado = Math.floor(totalPrice); //arredondado preço total

    return precoArredondado;
  };

  //preco e tempo, passando para o modal
  const options = [
    {
      id: '1',
      name: 'Standard',
      price: calculatePrice(distance, duration, 0.2) + 'AOA',
      waitTime: Math.floor((duration / 60) * 2) + 'min',
      image: require('../../../assets/icones/suv.png'),
    },
    {
      id: '2',
      name: 'Economia',
      price: calculatePrice(distance, duration, 0.1) + 'AOA',
      waitTime: Math.floor((duration / 60) * 3) + 'min',
      image: require('../../../assets/icones/suv.png'),
    },
    {
      id: '3',
      name: 'Fast',
      price: calculatePrice(distance, duration, 0.3) + 'AOA',
      waitTime: Math.floor(duration / 60) + 'min',
      image: require('../../../assets/icones/suv.png'),
    },
  ];

  const NameUser = user?.user?.name || '';
  if (locationError) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          Erro ao obter localização: {locationError}
        </Text>
      </View>
    );
  }
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.optionContainerp}
        onPress={() => handleAddServicos()}>
        <View style={styles.optionImageContainerp}>
          <Image source={item.image} style={styles.optionImagep} />
        </View>
        <View style={styles.optionTextContainerp}>
          <Text style={styles.optionNamep}>{item.name}</Text>
          <Text style={styles.optionPricep}>{item.price}</Text>
          <Text style={styles.optionWaitTimep}>{item.waitTime}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  //Origem
  const longitudeColeta = currentLocation?.coords?.longitude;
  const latitudeColeta = currentLocation?.coords?.latitude;

  //Destino
  const destinationLatitude = destinationCoordinates?.latitude;
  const destinationLongitude = destinationCoordinates?.longitude;

  const IdUser = user?.user?.id || '';

  console.log('Destino Latitude:  ', destinationLatitude);
  console.log('Destino Longitude:  ', destinationLongitude);

  //SOLICITANDO SERVICO
  const handleAddServicos = () => {
    // Access the properties of the selected option
    const servicoData = {
      cliente_id: IdUser,
      servico_id: tipoServico,
      data_hora: '2023-04-29',
      local_coleta: currentPlace,
      origem: currentPlace,
      destino: destination,
      status: 'pendente',
      distancia: distance,
      longitude_coleta: longitudeColeta.toString(),
      latitude_coleta: latitudeColeta.toString(),
      longitude_destino: destinationLongitude.toString(),
      latitude_destino: destinationLatitude.toString(),
    };

    addServicos(servicoData)
      .unwrap()
      .then(response => {
        // Manipule a resposta bem-sucedida aqui

        const solicitacaoId = response?.solicitacao?.id; // obtém o ID da solicitação
        console.log('Solicitação de serviço criada com sucesso!', response);

        // Redireciona para a tela de processamento de pedido passando o ID da solicitação
        navigation.navigate('ProcessandoPedido', {solicitacaoId});
      })
      .catch(e => {
        // Manipule os erros aqui, se necessário
        console.error('O correu um erro ao criar a solicitação de serviço.', e);
      });

    setModalVisibleP(false);
  };

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

          {destinationCoords && (
            <Marker
              coordinate={destinationCoords}
              title={destination}
              pinColor="#008000"
            />
          )}
          {routeCoordinates.length > 0 && (
            <Polyline
              coordinates={routeCoordinates}
              strokeColor="#FF0000"
              strokeWidth={3}
            />
          )}
        </MapView>
      )}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Input
              inputStyle={styles.searchInput}
              placeholder="Digite a posição inicial"
              value={currentPlace}
              onChangeText={text => setCurrentPlace(text)}
              leftIcon={<Icon name="place" size={20} color="red" />}
            />
            <Input
              inputStyle={styles.searchInput}
              placeholder="Digite o destino"
              value={destination}
              onChangeText={text => handleDestinationChange(text)}
              leftIcon={<Icon name="place" size={20} color="green" />}
            />
            {suggestions.length > 0 && (
              <View
                style={[
                  styles.suggestionsContainer,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {maxHeight: 200, overflow: 'scroll'},
                ]}>
                {suggestions.map(suggestion => (
                  <TouchableOpacity
                    key={suggestion.place_id}
                    style={styles.suggestionButton}
                    onPress={() => handleSuggestionPress(suggestion)}>
                    <Text style={styles.suggestionText}>
                      {suggestion.display_name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
      </Modal>

      <View>
        {routeCoordinates.length === 0 && (
          <View
            style={
              routeCoordinates.length === 0 ? styles.modalContentInput : null
            }>
            <View style={styles.header}>
              <Text style={styles.NomeUser}>{NameUser}, Para Onde Vais?</Text>
              <View style={styles.favorite}>
                <Image
                  style={styles.heartIcon}
                  source={require('../../../assets/images/coracao.png')}
                />
                <Text styles={styles.favorite}>Favorito</Text>
                <View />
              </View>
            </View>
            <Input
              containerStyle={styles.modalContainer}
              inputStyle={styles.searchInput}
              placeholder="Digite o destino"
              value={destination}
              onFocus={() => setModalVisible(true)}
              leftIcon={<Icon name="place" size={20} color="green" />}
            />
          </View>
        )}
        {routeCoordinates.length > 0 && showPrecoCorrida && (
          <View visible={true} animationType="slide" transparent={false}>
            <View style={{flex: 1}}>
              {modalVisibleP && (
                <Modal
                  visible={modalVisibleP}
                  animationType="slide"
                  transparent={true}>
                  <View style={styles.modalContainerp}>
                    <View style={styles.modalContentp}>
                      <FlatList
                        data={options}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        contentContainerStyle={styles.optionsContainerp}
                        horizontal={true}
                      />
                    </View>
                  </View>
                </Modal>
              )}
              {!modalVisible && <View />}
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
