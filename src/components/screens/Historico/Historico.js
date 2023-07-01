import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import MyButton from './botao/e';
import Separador from '../../common/myCommon/separador';
import Pagamentos from './Pagamentos';
import { ScrollView } from 'react-native-gesture-handler';

const meses = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const diasDaSemana = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sabado',
];

const hoje = new Date();
const diaDaSemana = diasDaSemana[hoje.getDay()];
const dia = hoje.getUTCDate();
const mes = meses[hoje.getMonth()];
const ano = hoje.getFullYear();

const Historico = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Camada1}>
        <MyButton />
        <Hoje />
      </View>
      <SafeAreaView style={styles.camada2}>
        <ScrollView>
          <Pagamentos />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const Semanal = () => (
  <View>
    <Hoje />
    <View style={styles.weekDaysRow}>
      {diasDaSemana.map((day, index) => (
        <Text key={index}>{day[0]}</Text>
      ))}
    </View>
    <View style={styles.graphRow}>
      {diasDaSemana.map((_, index) => (
        <View
          key={index}
          style={[styles.graphBar, index === 4 && styles.graphBarActive]}
        />
      ))}
    </View>
    <Separador />
    <Resumo />
  </View>
);

const Hoje = () => (
  <View>
    <View style={styles.dateRow}>
      <Text
        style={styles.dateText}>{`${diaDaSemana}, ${dia} ${mes} ${ano}`}</Text>
    </View>
    <View style={styles.balanceRow}>
      <Image source={require('../../../assets/icones/coins.png')} />
      <Text style={styles.balanceText}>58.000.000</Text>
    </View>
    <Resumo />
  </View>
);

const Resumo = () => (
  <View style={styles.summaryRow}>
    <View style={styles.summaryColumn}>
      <Text style={styles.summaryValue}>15</Text>
      <Text>Viagens</Text>
    </View>
    <View style={styles.summaryColumn}>
      <Text style={styles.summaryValue}>08:30</Text>
      <Text>Horas Online</Text>
    </View>
    <View style={styles.summaryColumn}>
      <Text style={styles.summaryValue}>3.000</Text>
      <Text>CAsh Trip</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: 'white',
  },
  Camada1: {
    backgroundColor: 'white',
    height: 310,
    width: '90%',
    margin: 24,
    borderRadius: 16,
    bottom: 65,
    elevation: 5,
  },
  camada2: {
    backgroundColor: 'white',
    height: 250,
    bottom: 67,
  },
  dateRow: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
    top: 23,
    marginVertical: 12,
  },
  dateText: {
    color: '#999999',
    fontSize: 18,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 90,
    bottom: 50,
    right: 10,
  },
  balanceText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  summaryRow: {
    bottom: 69,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 100,
    marginTop: -20
  },
  summaryColumn: {
    flexDirection: 'column',
  },
  summaryValue: {
    fontSize: 20,
    alignItems: 'center',
  },
  weekDaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 50,
  },
  graphRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 80,
  },
  graphBar: {
    backgroundColor: '#D6001B',
    height: 10,
    width: 20,
  },
  graphBarActive: {
    bottom: 0,
  },
});

export default Historico;
