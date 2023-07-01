import {View, SafeAreaView, StatusBar, Image, TextInput} from 'react-native';
import React from 'react';
import Botao from '../../../common/myCommon/BotaoVoltar';
import Separador from '../../../common/myCommon/separador';
import Conversas from './conversas';
import {estilo} from './css_chatScreen';

const ChatScreen = () => {
  return (
    <SafeAreaView style={estilo.conteiner_principal}>
      <StatusBar backgroundColor={'#D6001B'} />
      <View style={estilo.camada1}>
        <Botao />
        <View style={estilo.camada2}>
          <View />
          <View style={estilo.camada3}>
            <CampoPesquisa />
            <Separador />
            <Conversas />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const CampoPesquisa = () => {
  return (
    <View style={estilo.Pesquisa_conteiner}>
      <Image
        source={require('../../../../assets/icones/search.png')}
        style={estilo.iconeLupa}
      />
      <TextInput style={estilo.campo_de_texto} placeholder="Procurar..." />
    </View>
  );
};

export default ChatScreen;
