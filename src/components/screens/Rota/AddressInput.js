import React, {useEffect, useState} from 'react';
import {View, TextInput, FlatList, TouchableOpacity, Text} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import styles from '../Corrida/style/InserirEnderecoEstilo';
import Icon from 'react-native-vector-icons/FontAwesome';

function AddressInput({addresses, onLocationSelect, useCurrentLocation}) {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [hasFetchedCurrentLocation, setHasFetchedCurrentLocation] =
    useState(false);

  useEffect(() => {
    if (useCurrentLocation && !hasFetchedCurrentLocation) {
      Geolocation.getCurrentPosition(
        async position => {
          const {latitude, longitude} = position.coords;
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
          );
          const data = await response.json();
          setInputValue(data.display_name);
          setSelectedLocation({
            lat: latitude,
            lng: longitude,
            name: data.display_name,
          });
          setHasFetchedCurrentLocation(true);
          onLocationSelect &&
            onLocationSelect({
              lat: latitude,
              lng: longitude,
              name: data.display_name,
            });
        },
        error => console.log(error.message),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
      );
    }
  }, [hasFetchedCurrentLocation, onLocationSelect, useCurrentLocation]);

  const updateInputValue = text => {
    setInputValue(text);

    if (text.length > 0) {
      const newSuggestions = addresses.filter(
        address =>
          address.nome &&
          address.nome.toLowerCase().includes(text.toLowerCase()),
      );
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const selectAddress = address => {
    setInputValue(address.nome);
    setSuggestions([]);
    setSelectedLocation({lat: address.latitude, lng: address.longitude});
    onLocationSelect &&
      onLocationSelect({
        lat: address.latitude,
        lng: address.longitude,
        name: address.nome,
      });
  };

  return (
    <View>
      <TextInput
        style={styles.AddressInput}
        onChangeText={updateInputValue}
        value={inputValue}
      />
      {inputValue ? (
        <TouchableOpacity onPress={() => setInputValue('')}>
          <Icon name="times-circle" size={20} />
        </TouchableOpacity>
      ) : null}
      <FlatList
        data={suggestions}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.suggestionItemContainer}
            onPress={() => selectAddress(item)}>
            <Text style={styles.suggestionItemText}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default AddressInput;
