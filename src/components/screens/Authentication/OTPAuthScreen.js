/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { TextInput, View, Text, StatusBar, SafeAreaView } from 'react-native';
import BotaoRecto from '../../common/myCommon/BotaoRecto';
import styles from './style/AutenticacaoEstilo';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useVerifyOtpMutation } from '../../../features/user/services/userService';

const OtpScreen = () => {

  const [tempoRestante, setTempoRestante] = useState(180);
  const navigation = useNavigation();

  const route = useRoute();
  const phoneNumber = route.params?.phoneNumber || ''; //numero de telefone do usuario, a ser passado pelo RecuperarSenha
  //console.log(phoneNumber)
  const [verifyOtp, { isLoading: isVerifyingOtp }] = useVerifyOtpMutation();

  //console.log(phoneNumber)

  const handleOtpValueChange = (text, index) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = text;

    setOtpValues(newOtpValues);
  };

  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);

  const handlNovaSenha = async () => {
    const otpValue = otpValues.join(''); // Concatenação dos valores dos TextInput

    try {
      const response = await verifyOtp({
        telefone: phoneNumber, // phoneNumber vindo do parâmetro da rota
        otp: otpValue,
      });

      // Verificar a resposta do servidor
      if (response.data?.status === 1) {
        console.log('OTP verificado com sucesso!');
        navigation.navigate('NovaSenha', { phoneNumber: phoneNumber });
      } else {
        console.error('Código OTP inválido.');
      }
    } catch (error) {
      console.error('Ocorreu um erro ao verificar o OTP:', error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTempoRestante(tempo => tempo - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (tempoRestante === 0) {
      //Tenho de determinar o que vai acontecer
    }
  }, [tempoRestante]);

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
            <Text style={styles.titulo}>Validação</Text>
          </View>
          <Text style={styles.subtitle}>
            Insira o código de 6-dígitos que foi enviado para O número +244 {phoneNumber}.{' '}
            <Text style={{ color: 'red' }}>
              {' '}
              Você inseriu o número Correto?{' '}
            </Text>
          </Text>
          <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <TextInput
                  value={otpValues[0]}
                  onChangeText={(text) => handleOtpValueChange(text, 0)}
                  style={styles.input}
                  maxLength={1}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <TextInput
                  value={otpValues[1]}
                  onChangeText={(text) => handleOtpValueChange(text, 1)}
                  style={styles.input}
                  maxLength={1}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <TextInput
                  value={otpValues[2]}
                  onChangeText={(text) => handleOtpValueChange(text, 2)}
                  style={styles.input}
                  maxLength={1}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <TextInput
                  value={otpValues[3]}
                  onChangeText={(text) => handleOtpValueChange(text, 3)}
                  style={styles.input}
                  maxLength={1}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <TextInput
                  value={otpValues[4]}
                  onChangeText={(text) => handleOtpValueChange(text, 4)}
                  style={styles.input}
                  maxLength={1}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <TextInput
                  value={otpValues[5]}
                  onChangeText={(text) => handleOtpValueChange(text, 5)}
                  style={styles.input}
                  maxLength={1}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View>
              <Text style={styles.Reenviarcodigo}>
                Reenvie o código em{' '}
                <Text style={{ color: 'red' }}>
                  {tempoRestante} {tempoRestante === 1 ? 'segundo' : 'segundos'}
                </Text>
              </Text>
            </View>
            <View style={styles.botaoContainer}>
              <BotaoRecto titulo={'Confirmar'} onPress={handlNovaSenha} />
            </View>
          </SafeAreaView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;
