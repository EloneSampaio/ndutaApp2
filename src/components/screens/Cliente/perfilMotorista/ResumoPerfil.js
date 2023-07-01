/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Avatar from './parts/avatar';
import BotaoRecto from '../../../common/myCommon/BotaoRecto';
import Separador from '../../../common/myCommon/separador';
import BotaoVoltar from '../../../common/myCommon/BotaoVoltar';
import Informacao from './parts/informacao';

const Perfil = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate('CloseAccount');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#D6001B'} />
      <View style={{flex: 1}}>
        <View style={styles.camada1}>
          <BotaoVoltar />
        </View>

        <View style={styles.avatarContainer}>
          <Avatar />
        </View>
        <View style={styles.motoristaContainer}>
          <Text style={styles.motoristaTitulo}>MOTORISTA:</Text>
          <Text style={styles.motoristaNome}>João Manuel da Silva</Text>
        </View>
        <Separador />
        <View>
          <View style={styles.descricaoTitulo}>
            <Text style={styles.descricaoTituloTexto}>Viagens:</Text>
            <Text style={styles.descricaoTituloTexto}>Ganhos:</Text>
            <Text style={styles.descricaoTituloTexto}>Anos:</Text>
          </View>
          <View style={styles.descricaoConteudo}>
            <Text style={styles.descricaoTituloConteudo}>283</Text>
            <Text style={styles.descricaoTituloConteudo}>362 AO</Text>
            <Text style={styles.descricaoTituloConteudo}>15</Text>
          </View>
        </View>
        <Informacao titulo="Telefone" conteudo="+244 943975306" />
        <Informacao titulo="Email" conteudo="exemplo@gmail.com" />
        <Informacao titulo="Língua" conteudo="Português, Inglês" />
        <Separador />
        <View style={styles.botaoSairContainer}>
          <BotaoRecto titulo={'Sair do Sistema'} onPress={handleBack} />
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
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: 640,
    position: 'absolute',
    bottom: 0,
    marginBottom: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  avatarContainer: {
    position: 'relative',
    marginTop: 80,
  },
  motoristaContainer: {
    position: 'relative',
    marginTop: 160,
    alignItems: 'center',
  },
  motoristaTitulo: {
    fontSize: 18,
    color: '#DADEE3',
  },
  motoristaNome: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  descricaoTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 25,
  },
  descricaoTituloTexto: {
    fontWeight: 'bold',
    color: '#DADEE3',
    fontSize: 18,
  },
  descricaoConteudo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 0,
  },
  descricaoTituloConteudo: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 24,
  },
  botaoSairContainer: {
    right: 45,
  },
});

export default Perfil;
