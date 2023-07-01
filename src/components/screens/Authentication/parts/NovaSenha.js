import React, { useState } from 'react';
import { TextInput, View, Text, StatusBar, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useNewPasswordMutation } from '../../../../features/user/services/userService';
import BotaoRecto from '../../../common/myCommon/BotaoRecto';
import BotaoVoltar from '../../../common/myCommon/BotaoVoltar';
import styles from '../style/ConfirmarSenhaEstilo';
import { useRoute } from '@react-navigation/native';


const NewPasswordScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const phoneNumber = route.params?.phoneNumber || '';
  const [password, setPassword] = useState('');
  const [updatePassword, { isLoading, isError }] = useNewPasswordMutation();

  const handleUpdateClick = () => {
    updatePassword({ password, phone: phoneNumber })
      .unwrap()
      .then((data) => {
        console.log('Dados Actualizado')
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.log('Erro ao actualizar a password:', error);
      });
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
            <BotaoVoltar />
            <Text style={styles.subtitle}>Redefina a sua senha</Text>
            <Text style={styles.titulo}>Aqui tudo é fácil!</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              placeholder="Nova Senha"
              secureTextEntry={true}
            />
            <View style={styles.botaoContainer}>
              <BotaoRecto
                titulo={'Continuar'}
                onPress={handleUpdateClick}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewPasswordScreen;
