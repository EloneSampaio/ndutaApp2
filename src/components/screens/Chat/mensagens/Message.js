import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const Message = ({message, backgroundColor, condicao}) => {
  return (
    <View style={estilo.container}>
      <View
        style={[
          estilo.messageContainer,
          condicao ? estilo.enviado : estilo.recebido,
        ]}>
        <Text
          style={[
            estilo.textoSMS,
            condicao ? estilo.textoEnviado : estilo.textoRecebido,
          ]}>
          {message}
        </Text>
      </View>
    </View>
  );
};
const estilo = StyleSheet.create({
  container: {
    paddingVertical: 10,
    padding: 10,
    justifyContent: 'flex-end',
  },
  messageContainer: {
    alignSelf: 'flex-start',
    maxWidth: '80%',
    borderRadius: 5,
    marginVertical: 5,
    padding: 10,
  },
  enviado: {
    backgroundColor: '#D6001B',
    alignSelf: 'flex-end',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  recebido: {
    backgroundColor: '#ddd',
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  textoSMS: {
    fontSize: 16,
    color: '#000',
  },
  textoRecebido: {
    color: '#000',
  },
  textoEnviado: {
    color: '#fff',
  },
});
export default Message;
