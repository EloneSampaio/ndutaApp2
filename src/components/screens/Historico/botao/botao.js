import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Botao = props => {
  const onPress = () => {
    props.onPress && props.onPress(props.titulo);
  };

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text
          style={[props.condicao ? styles.textVermelho : styles.textCinzento]}>
          {props.titulo}
        </Text>
      </TouchableOpacity>
      <View
        style={[props.condicao ? styles.linhaVermelha : styles.linhaCinzenta]}
      />
    </View>
  );
};

export default Botao;

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 50,
    elevation: 34,
  },
  textCinzento: {
    color: '#bbb',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  textVermelho: {
    color: '#D6001B',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  linhaCinzenta: {
    backgroundColor: '#bbb',
    height: 3,
    width: '50%',
  },
  linhaVermelha: {
    backgroundColor: '#D6001B',
    height: 3,
    width: '50%',
  },
});
