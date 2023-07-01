import React, {useEffect, useState} from 'react';
import {Text, View, Image, Linking} from 'react-native';
import estilo from './style/MotoristaEstilo';
import BotaoRecto from '../../common/myCommon/BotaoRecto';
import {useRoute} from '@react-navigation/native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MenuSuperior from './parts/MenuSuperiorMotoristaScreen';
import axios from 'axios';
import {useSelector} from 'react-redux';

const Motorista = () => {
  const corrida = useSelector(state => state.common.corridaInfo);

  const [motoristaNome, setMotoristaNome] = useState('');
  const [viatura, setViatura] = useState('');
  const [cor, setCor] = useState('');
  const [telefone, setTelefone] = useState('');

  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [routeData, setRouteData] = useState(null);

  const fetchRoute = async (startLat, startLng, endLat, endLng) => {
    try {
      const url = `http://65.108.158.105:8081/ors/v2/directions/driving-car?start=${startLng},${startLat}&end=${endLng},${endLat}`;
      const response = await axios.get(url);
      const {data} = response;
      return data;
    } catch (error) {
      console.error('Failed to fetch route:', error);
      return null;
    }
  };

  useEffect(() => {
    const onSubmitGetSolicitation = async () => {
      try {
        onSubmitGetMotorista(5);
      } catch (error) {
        console.error('Ocorreu um erro: ', error);
      }
    };

    const onSubmitGetMotorista = async () => {
      try {
        setMotoristaNome('sampaio');
        setViatura('AAS');
        setCor('VERMELHO');
        setTelefone('923887766');
      } catch (error) {
        console.error('Registro falhou', error);
      }
    };

    onSubmitGetSolicitation();
  }, [corrida]);

  useEffect(() => {
    const watchPosition = Geolocation.watchPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCoordinates(prevCoordinates => ({
          ...prevCoordinates,
          latitude,
          longitude,
        }));

        if (corrida?.motorista?.latitude && corrida?.motorista?.longitude) {
          setTimeout(async () => {
            const routeData = await fetchRoute(
              latitude,
              longitude,
              corrida.motorista.latitude,
              corrida.motorista.longitude,
            );
            setRouteData(routeData);
          }, 5000); // Delay for 5 seconds before fetching the route
        }
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 2000},
    );

    return () => {
      Geolocation.clearWatch(watchPosition);
    };
  }, [corrida]);

  const handleChamarPress = () => {
    if (telefone) {
      Linking.openURL(`tel:${telefone}`);
    }
  };

  return (
    <View style={estilo.estilo.container}>
      <MenuSuperior />
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.007,
          longitudeDelta: 0.026,
        }}
        region={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.007,
          longitudeDelta: 0.026,
        }}>
        <Marker coordinate={coordinates} title="Minha Posição" />
        {routeData && routeData.features && (
          <Polyline
            coordinates={routeData.features[0].geometry.coordinates.map(
              ([lng, lat]) => ({latitude: lat, longitude: lng}),
            )}
            strokeColor="#FF0000"
            strokeWidth={3}
          />
        )}
      </MapView>
      <View>
        <View style={estilo.estilo.avatarContainer}>
          <Image
            source={require('../../../assets/icones/avatar.png')}
            style={estilo.estilo.avatar}
          />
        </View>
        <View style={estilo.estilo.infoContainer}>
          <Text style={estilo.estilo.label}>Motorista:</Text>
          <Text style={estilo.estilo.motoristaNome}>{motoristaNome}</Text>
          <View style={estilo.estilo.row}>
            <Text style={estilo.estilo.bold}>Viatura:</Text>
            <Text style={estilo.estilo.boldRed}>{viatura}</Text>
          </View>
          <View style={estilo.estilo.row}>
            <Text style={estilo.estilo.bold}>Cor:</Text>
            <Text style={estilo.estilo.boldRed}>{cor}</Text>
          </View>
          <View style={estilo.estilo.row}>
            <Text style={estilo.estilo.bold}>Telefone:</Text>
            <Text style={estilo.estilo.boldRed}>{telefone}</Text>
          </View>
        </View>
      </View>
      <View style={estilo.estilo.botaoContainer}>
        <View style={estilo.estilo.botaoWrapper}>
          <BotaoRecto titulo={'Cancelar'} />
        </View>
        <View style={estilo.estilo.botaoWrapper}>
          <BotaoRecto titulo={'Chamar'} onPress={handleChamarPress} />
        </View>
        <View style={estilo.estilo.botaoWrapper}>
          <BotaoRecto titulo={'Sms'} />
        </View>
      </View>
    </View>
  );
};

export default Motorista;
