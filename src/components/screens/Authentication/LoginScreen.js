import React from 'react';
import {
  TextInput,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {FormProvider, Controller, useForm} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {authenticate} from '../../../features/authentication/actions/authThunk';

import BotaoRecto from '../../common/myCommon/BotaoRecto';
import styles from './style/LoginEstilo';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isLoading = useSelector(state => state.auth.status);
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const error = useSelector(state => state.auth.error);

  const schema = yup.object().shape({
    telefone: yup
      .string()
      .min(9, 'O telefone deve ter pelo menos 9 dígitos.')
      .max(9, 'O telefone deve ter apenas 9 dígitod')
      .required('Por favor, insira seu telefone.'),
    password: yup
      .string()
      .min(5, 'A senha deve ter pelo menos 5 caracteres.')
      .required('Por favor, insira sua senha.'),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const handleForgotPasswordClick = () => {
    navigation.navigate('RecuperSenha');
  };

  const onSubmit = async credentials => {
    try {
      dispatch(authenticate(credentials));
      if (loggedIn) {
        navigation.navigate('Home');
      }
    } catch (err) {
      console.error('Authentication failed', err);
    }
  };

  const inputFields = [
    {
      name: 'telefone',
      placeholder: 'Telefone',
      keyboardType: 'default',
      secureTextEntry: false,
      defaultValue: '952602436',
    },
    {
      name: 'password',
      placeholder: 'Password',
      keyboardType: 'default',
      defaultValue: '123456789',
      secureTextEntry: true,
    },
  ];

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
            <Text style={styles.titulo}>Faça Login</Text>
            <Text style={styles.subtitle}>Vamos começar </Text>
          </View>
          <FormProvider {...methods}>
            <View style={styles.form}>
              {inputFields.map((field, index) => (
                <Controller
                  key={index}
                  control={methods.control}
                  name={field.name}
                  defaultValue={field.defaultValue}
                  render={({field: {onChange, onBlur, value}}) => (
                    <View>
                      <TextInput
                        style={styles.input}
                        keyboardType={field.keyboardType}
                        secureTextEntry={field.secureTextEntry}
                        placeholder={field.placeholder}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                      <ErrorMessage
                        errors={methods.errors}
                        name={field.name}
                        render={({message}) => (
                          <Text style={styles.error}>{message}</Text>
                        )}
                      />
                    </View>
                  )}
                />
              ))}
              {error && Object.keys(error).length > 0 && (
                <Text style={styles.error}>{error.message}</Text>
              )}
              <View style={styles.botaoContainer}>
                <BotaoRecto
                  titulo={isLoading ? 'Carregando...' : 'Acessar'}
                  onPress={methods.handleSubmit(onSubmit)}
                />
              </View>
              <View style={styles.entrarCom}>
                <Text>
                  <Text style={{color: 'red', marginTop: -10}}>
                    __________________
                  </Text>
                  <Text style={{color: '#000'}}>Ou continuar com</Text>
                  <Text style={{color: 'red', marginTop: -10}}>
                    __________________
                  </Text>
                </Text>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.facebookButton]}>
                  <Icon name="facebook-f" size={20} color="#406cc8" />
                  <Text style={styles.buttonText}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.googleButton]}>
                  <Image
                    source={require('../../../assets/icones/google.png')}
                    style={styles.googleIcon}
                  />
                  <Text style={styles.buttonText}>Google</Text>
                </TouchableOpacity>
              </View>
            </View>
          </FormProvider>
          <TouchableWithoutFeedback onPress={handleForgotPasswordClick}>
            <Text style={[styles.esqueceu]}>Esqueceu sua senha?</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
