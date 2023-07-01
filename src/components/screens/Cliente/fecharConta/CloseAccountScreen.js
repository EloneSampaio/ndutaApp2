import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';
import BotaoRecto from '../../../common/myCommon/BotaoRecto';
import BotaoVoltar from '../../../common/myCommon/BotaoVoltar';
import { useNavigation } from '@react-navigation/native';


const CloseAccountScreen = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  const handleInputChange = (text) => {
    setMessage(text);
  };

  const handleVoltarHome = () => {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView style={estilo.container}>
      <StatusBar backgroundColor={'#D6001B'} />
      <View style={estilo.camada1}>  
        <BotaoVoltar style={estilo.voltar} onPress={handleVoltarHome}/>
        <View>
          <Text style={estilo.titulo}>Fechar A Conta</Text>
          <TextInput
            multiline
            numberOfLines={4} // Define o número máximo de linhas visíveis
            onChangeText={handleInputChange}
            placeholder="Digite o motivo pela qual deseja fechar a conta..."
            style={estilo.input}
          />
        </View>
        <View style={estilo.botaoContainer}>
          <BotaoRecto titulo={'Confirmar o Pedido'} />
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
    height: 770,
    position: 'absolute',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  titulo: {
    color: '#D6001B',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 60,
    bottom: 200,
    textAlign: 'center'
  },
  botaoContainer: {
    bottom: 150,
    right: 14,
    width: '80%',
    alignContent: 'center',
  },
  input: {
    height: 150,
    borderColor: 'red',
    borderWidth: 1,
    paddingHorizontal: 10,
    bottom: 200,
    color: '#000',
    fontSize: 16
  },

});

export default CloseAccountScreen;
