import React from 'react';
import { View, SafeAreaView, StyleSheet, StatusBar, ScrollView } from 'react-native';
import BotaoVoltar from '../../../components/common/myCommon/BotaoVoltar';
import Historico from './Historico';

const HistoryScreen = () => {
  return (

    <SafeAreaView style={estilo.container}>
      <StatusBar backgroundColor={'#D6001B'} />
      <View style={estilo.camada1}>
        <BotaoVoltar />
        <View style={estilo.historicoContainer}>
          <Historico />
        </View>
      </View>
    </SafeAreaView>


  );
};

const estilo = StyleSheet.create({
  container: {
    backgroundColor: '#D6001B',
    width: '100%',
    height: '100%',
  },
  camada1: {
    backgroundColor: 'white',
    width: '100%',
    height: 640,
    position: 'absolute',
    bottom: 0,
    marginBottom: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    elevation: 12,
  },
  historicoContainer: {
    bottom: 530,
  },
});

export default HistoryScreen;
