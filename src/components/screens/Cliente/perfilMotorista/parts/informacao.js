import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Informacao = ({titulo, conteudo}) => {
  return (
    <View style={styles.informacaoContainer}>
      <Text>{titulo}</Text>
      <Text>{conteudo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  informacaoContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10,
  },
});

export default Informacao;
