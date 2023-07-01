import React, { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BotaoRecto from '../../../common/myCommon/BotaoRecto';
import BotaoVoltar from '../../../common/myCommon/BotaoVoltar';
import styles from '../style/RecuperarSenhaEstilo';

import { useVerificarNumeroTelefoneQuery } from '../../../../features/user/services/userService';
import { useSendOtpMutation } from '../../../../features/user/services/userService';


const RecuperSenhaScreen = () => {

  const navigation = useNavigation();

  const [phone, setTelefone] = useState('');

  // Chame o hook useVerificarNumeroTelefoneQuery para chamar o endpoint
  const { data: user, error, isLoading } = useVerificarNumeroTelefoneQuery(phone);

  //envia o otp
  const [sendOtp, { isLoading: isSendingOtp }] = useSendOtpMutation();


  const handleBack = () => {
    navigation.navigate('Login');
  };

  const handleRecuperSenha = () => {
    navigation.navigate('OTP');
  };

  const handleConfirmar = () => {
    verificarExistenciaTelefone();
  };

  const verificarExistenciaTelefone = () => {
    if (isLoading) {
      // Lógica para exibir um indicador de carregamento
    } else if (error) {
      console.error('Ocorreu um erro ao verificar o número de telefone:', error);
    } else {
      console.log(user)
      if (user.user !== null) {
        // O número de telefone existe, enviar o OTP
        sendOtp(phone)
          .then(() => {
            console.log('OTP enviado com sucesso!');
            navigation.navigate('OTP', { phoneNumber: phone });
          })
          .catch((error) => {
            console.error('Ocorreu um erro ao enviar o OTP:', error);
          });
      } else {
        // O número de telefone não existe
        console.log('Número de telefone não existe');
      }
    }
  };


  return (
    <SafeAreaView style={styles.container2}>
      <StatusBar backgroundColor={'#D6001B'} />
      <View style={styles.camada1}>
        <View style={styles.container}>
          <StatusBar
            style={styles.status}
            barStyle="light-content"
            backgroundColor="#D6001B"
          />
          <View style={styles.cabecalho}>
            <BotaoVoltar onPress={handleBack} />
            <Text style={styles.subtitle}>Você Tem Um Problema?</Text>
            <Text style={styles.titulo}>Não Te Preocupe!</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              onChangeText={setTelefone}
              placeholder="Telefone"
              keyboardType='numeric'
            />
            <View>
              <TouchableOpacity onPress={handleBack}>
                <Text style={[styles.esqueceu]}>Sem Problema? Faça Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.botaoContainer}>
              <BotaoRecto titulo={'Continuar'} onPress={handleConfirmar} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RecuperSenhaScreen;
