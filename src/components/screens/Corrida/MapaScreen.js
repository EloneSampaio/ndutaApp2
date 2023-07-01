import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const Mapa = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <MapView
        style={{flex: 1}}
        region={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        }}>
        <Marker coordinate={coordinates} />
      </MapView>
    </View>
  );
};

export default Mapa;
