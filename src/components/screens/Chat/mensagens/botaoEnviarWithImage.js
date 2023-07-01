/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const BotaoRectoWithImage = ({titulo}) => {
  const onPress = () => ' setCount(prevCount => prevCount + 1)';
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{color: 'white', fontSize: 18, right: 13}}>{titulo}</Text>
        <Image
          style={{width: 30, height: 30}}
          source={require('../../../../assets/icones/enviar.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    margin: 50,
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#D6001B',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 55,
    width: 120,
    left: 200,
    bottom: 70,
  },
});

export default BotaoRectoWithImage;
