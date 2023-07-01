/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './Estilos/BotaoVoltarEstilo';
import Icon from 'react-native-vector-icons/FontAwesome';

const b = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Icon name="long-arrow-left" size={30}/>
        <Text style={{ color: '#D6001B', fontSize: 20 }} />
      </TouchableOpacity>
    </View>
  );
};

export default b;
