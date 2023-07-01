import React from 'react';
import { TextInput, View, Text, StatusBar, SafeAreaView } from 'react-native';
import BotaoRecto from '../../common/myCommon/BotaoRecto';
import styles from './style/RegistroEstilo';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { setToken } from '../../../features/authentication/actions/AuthAction';

import { useRegistroMutation } from '../../../features/user/services/userService';

const RegistrationScreen = () => {
  const dispatch = useDispatch();
  const [registro, { isLoading, isError, data }] = useRegistroMutation();
  const navigation = useNavigation();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Email inválido')
      .required('Email é um campo obrigatório'),
    name: yup.string().required('Nome é um campo obrigatório'),
    phone: yup
      .string()
      .required('Telefone é um campo obrigatório')
      .length(9, 'Telefone deve ter exatamente 9 dígitos'),
    password: yup
      .string()
      .required('Senha é um campo obrigatório')
      .min(8, 'A senha deve ter no mínimo 8 caracteres'),
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async formData => {
    try {
      console.log(formData);
      const result = await registro(formData).unwrap();
      console.log('Registro ok');
      dispatch(setToken(result.access_token));
      navigation.navigate('Home');
    } catch (error) {
      console.error('Registro failed', error);
    }
  };

  const inputFields = [
    {
      name: 'name',
      placeholder: 'Nome Completo',
      keyboardType: 'default',
      secureTextEntry: false,
    },
    {
      name: 'phone',
      placeholder: 'Telefone',
      keyboardType: 'numeric',
      secureTextEntry: false,
    },
    {
      name: 'email',
      placeholder: 'Email',
      keyboardType: 'email-address',
      secureTextEntry: false,
    },
    {
      name: 'password',
      placeholder: 'Senha',
      keyboardType: 'default',
      secureTextEntry: false,
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
            <Text style={styles.titulo}>Registo</Text>
            <Text style={styles.subtitle}>Vamos começar</Text>
          </View>
          <View style={styles.form}>
            {inputFields.map((field, index) => (
              <View key={index}>
                <Controller
                  control={control}
                  name={field.name}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={styles.input}
                      keyboardType={field.keyboardType}
                      secureTextEntry={field.secureTextEntry}
                      placeholder={field.placeholder}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />
                {errors && errors[field.name] && (
                  <Text style={[styles.error, { color: 'red' }]}>{errors && errors[field.name] && errors[field.name].message}</Text>
                )}
              </View>
            ))}
            <View style={styles.botaoContainer}>
              <BotaoRecto
                titulo={'Confirmar Registo'}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
