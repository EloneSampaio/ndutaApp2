import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MenuSuperior from './parts/MenuSuperiorHome';
import MenuInferior from '../Solicitacao/Servico';

const App = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const requestLocationPermission = async () => {
    try {
      let permission;
      if (Platform.OS === 'android') {
        permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
      } else if (Platform.OS === 'ios') {
        permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
      }

      const result = await request(permission);
      if (result === RESULTS.GRANTED) {
        console.log('Permissão de localização concedida');
      } else {
        console.log('Permissão de localização negada');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    const getLocation = async () => {
      await requestLocationPermission();
      Geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setError(null);
          setLoading(false);
        },
        erro => {
          setError(erro.message);
          setLoading(false);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    };

    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MenuSuperior />
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <>
          {latitude && longitude ? (
            <MapView
              style={styles.map}
              region={{
                latitude,
                longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}>
              <Marker coordinate={{latitude, longitude}} />
            </MapView>
          ) : (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>
                {error || 'Falha ao obter localização.'}
              </Text>
            </View>
          )}
          <MenuInferior />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
});

export default App;
