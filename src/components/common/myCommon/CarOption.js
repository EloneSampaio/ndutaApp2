/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CarOption = ({imageSource, text}) => (
  <TouchableOpacity style={styles.carOption}>
    <Image source={imageSource} style={{height: 45, width: 45}} />
    <Text style={{fontSize: 14}}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  carOption: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    top: 45,
    width: '45%',
    padding: 10,
    borderRadius: 20,
    elevation: 7,
  },
});

export default CarOption;