import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import Linha from '../../../common/myCommon/separador';
import BotaoVoltar from '../../../common/myCommon/BotaoVoltar';
import BotaoRectoWithImage from './botaoEnviarWithImage';

import {Processar} from './mensagem';

const MessageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#D6001B'} />

      <View style={styles.camada1}>
        <View style={styles.barraDeCima}>
          <Image
            source={require('../../../../assets/icones/avatar.png')}
            style={styles.foto}
          />
          <View>
            <Image
              source={require('../../../../assets/icones/online.png')}
              style={styles.online}
            />
          </View>
        </View>
        <View style={styles.linha}>
          <Linha />
        </View>
        <BotaoVoltar />
      </View>
      <View style={styles.corpo}>
        <View style={styles.conteudo}>
          <ScrollView style={styles.scrollView}>
            <Processar />
          </ScrollView>
          <View>
            <TextInput style={styles.input} placeholder="Escreva aqui..." />
          </View>
          <BotaoRectoWithImage titulo={'Enviar'} />
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
  linha: {
    top: 60,
  },
  barraDeCima: {
    top: 30,
  },
  foto: {
    width: 50,
    height: 50,
    position: 'absolute',
    borderRadius: 100,
    left: 300,
    top: -23,
  },
  online: {
    width: 15,
    height: 15,
    position: 'absolute',
    borderRadius: 100,
    right: 60,
    top: 12,
  },
  corpo: {
    flex: 1,
    marginBottom: 60,
    marginHorizontal: 10,
    elevation: 4,
  },
  conteudo: {
    marginBottom: 150,
    borderColor: 'red',
    margin: 5,
  },
  scrollView: {
    top: 79,
  },
  input: {
    height: 80,
    maxHeight: 200,
    width: '60%',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#F4F8FB',
    margin: 30,
    top: 70,
    right: 20,
  },
});

export default MessageScreen;
