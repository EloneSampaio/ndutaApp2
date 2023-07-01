import React from 'react';
import {View, StyleSheet} from 'react-native';
import Botao from './botao';

const ButtonGroup = props => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Botao titulo="Hoje" condicao={true} />
      </View>
      <View style={styles.button}>
        <Botao titulo="semanal" condicao={false} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    left: 55,
    width: '60%',
  },
});

export default ButtonGroup;
