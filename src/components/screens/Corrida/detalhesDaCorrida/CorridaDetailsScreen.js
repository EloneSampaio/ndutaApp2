import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import BotaoVoltar from '../../../common/myCommon/BotaoVoltar';
import Separador from '../../../common/myCommon/BotaoRecto';

const CorridaDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#D6001B'} />
      <View style={styles.camada1}>
        <BotaoVoltar />
        <View style={styles.camada2}>
          <View style={styles.row1}>
            <View style={styles.statusIndicator} />
            <Text style={styles.textIlhaDoCabo}>ilha do cabo</Text>
            <Text style={styles.textInterno}>Interno</Text>
          </View>
          <View style={styles.separatorWrapper}>
            <Separador />
          </View>

          <View style={styles.statusIndicatorWrapper} />
          <Text style={styles.textIlhaDoCabo2}>ilha do cabo</Text>
          <Text style={styles.textZango3}>Zango 3</Text>
        </View>
        <View style={styles.separatorWrapper2}>
          <Separador />
        </View>

        <View style={styles.row2}>
          <Text style={styles.textTempo}>Tempo:</Text>
          <Text style={styles.textPreco}>Preço:</Text>
          <Text style={styles.textDistancia}>Distância:</Text>
        </View>
        <View style={styles.row3}>
          <Text style={styles.boldText}>31 min</Text>
          <Text style={styles.boldText}>500</Text>
          <Text style={styles.boldText}>4,0 km</Text>
        </View>
        <View style={styles.separatorWrapper3}>
          <Separador />
        </View>
        <View style={styles.row4}>
          <Text style={styles.textData}>Data</Text>
          <Text style={styles.textDataValue}>9, Abril 2023</Text>
        </View>
        <View style={styles.row5}>
          <Text style={styles.textTipoServico}>Tipo de Serviço</Text>
          <Text style={styles.textTipoServicoValue}>Normal</Text>
        </View>
        <View style={styles.row6}>
          <Text style={styles.textData}>Data</Text>
          <Text style={styles.textDataValue}>9, Abril 2023</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  camada2: {
    backgroundColor: '#fff',
    height: 180,
    width: '90%',
    margin: 20,
    borderRadius: 20,
    elevation: 7,
  },
  row1: {
    flexDirection: 'row',
    margin: 20,
  },
  statusIndicator: {
    backgroundColor: '#D6001B',
    height: 13,
    width: 13,
    borderRadius: 100,
  },
  textIlhaDoCabo: {
    left: 30,
    bottom: 8,

    color: '#ddd',
    fontSize: 18,
  },
  textInterno: {
    right: 70,
    top: 23,
    color: '#000',
    fontSize: 25,
  },
  separatorWrapper: {
    top: 20,
  },
  statusIndicatorWrapper: {
    backgroundColor: '#D6001B',
    height: 13,
    width: 13,
    borderRadius: 100,
    margin: 20,
    top: 20,
  },
  textIlhaDoCabo2: {
    left: 60,
    bottom: 19,
    color: '#ddd',
    fontSize: 18,
  },
  textZango3: {
    left: 60,
    bottom: 20,
    color: '#000',
    fontSize: 25,
  },
  separatorWrapper2: {
    bottom: 210,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 200,
  },
  textTempo: {
    color: '#ddd',
    fontSize: 17,
  },
  textPreco: {
    color: '#ddd',
    fontSize: 17,
  },
  textDistancia: {
    color: '#ddd',
    fontSize: 17,
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 170,
  },
  boldText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separatorWrapper3: {
    bottom: 150,
  },
  row4: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 120,
  },
  textData: {
    fontSize: 17,
    right: 33,
  },
  textDataValue: {
    fontSize: 17,
    left: 38,
  },
  row5: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 100,
    paddingLeft: 10,
  },
  textTipoServico: {
    fontSize: 17,
    right: 33,
  },
  textTipoServicoValue: {
    fontSize: 17,
    left: 20,
  },
  row6: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 80,
  },
});

export default CorridaDetailsScreen;
