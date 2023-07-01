import React, {useEffect, useState} from 'react';
import {
  TextInput,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from '../style/EstiloEditarPerfil';
import {useNavigation} from '@react-navigation/native';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';
import {useUpdateUserInfoMutation} from '../../../../features/user/services/userService';
import {useDispatch, useSelector} from 'react-redux';
import {useGetUserDataQuery} from '../../../../features/user/services/userService';

const UpdatePerfilScreen = () => {
  const navigation = useNavigation();

  const [updateUserInfo, {isLoad, isError, data}] = useUpdateUserInfoMutation();
  const token = useSelector(state => state.auth.token);

  const {
    data: user,
    error,
    isLoading,
  } = useGetUserDataQuery(null, {
    skip: !token,
  });

  const schema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    name: yup.string().required('Nome é obrigatório'),
    rua: yup.string().required('Rua é obrigatória'),
    numero: yup.string().required('Número é obrigatório'),
    bairro: yup.string().required('Bairro é obrigatório'),
    municipio: yup.string().required('Município é obrigatório'),
    provincia: yup.string().required('Província é obrigatória'),
  });

  const {control, handleSubmit, errors, reset} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      rua: '',
      numero: '',
      bairro: '',
      municipio: '',
      provincia: '',
    },
  });

  useEffect(() => {
    if (user) {
      const {name, email, phone, endereco} = user.user || {};
      const {rua, numero, bairro, municipio, provincia} = user.endereco || {};

      reset({
        name: name || '',
        email: email || '',
        phone: phone || '',
        rua: rua || '',
        numero: numero || '',
        bairro: bairro || '',
        municipio: municipio || '',
        provincia: provincia || '',
      });
    }
  }, [user, reset]);

  const idUser = user?.user?.id || '';

  const [updateSuccess, setUpdateSuccess] = useState(false);

  const onSubmit = async formData => {
    try {
      console.log(formData);
      const result = await updateUserInfo({id: idUser, ...formData}).unwrap();
      console.log('Dados atualizados');
      console.log(result);

      setUpdateSuccess(true); // Atualiza a variável de estado para exibir a mensagem de sucesso
    } catch (error) {
      console.error('Erro ao atualizar os dados', error);
      setUpdateSuccess(false); // Atualiza a variável de estado para exibir a mensagem de erro
    }
  };

  const inputFields = [
    // Campos de entrada de dados
    {
      name: 'name',
      placeholder: 'Nome Completo',
      keyboardType: 'default',
      secureTextEntry: false,
    },
    {
      name: 'email',
      placeholder: 'Email',
      keyboardType: 'email-address',
      secureTextEntry: false,
    },
    {
      name: 'phone',
      placeholder: 'Telefone',
      keyboardType: 'numeric',
      secureTextEntry: false,
    },
    {
      name: 'rua',
      placeholder: 'Rua',
      keyboardType: 'default',
      secureTextEntry: false,
    },
    {
      name: 'numero',
      placeholder: 'Número Da Casa',
      keyboardType: 'default',
      secureTextEntry: false,
    },
    {
      name: 'bairro',
      placeholder: 'Bairro',
      keyboardType: 'default',
      secureTextEntry: false,
    },
    {
      name: 'municipio',
      placeholder: 'Cidade',
      keyboardType: 'default',
      secureTextEntry: false,
    },
    {
      name: 'provincia',
      placeholder: 'Provincia',
      keyboardType: 'default',
      secureTextEntry: false,
    },
  ];

  if (isLoading) {
    return (
      //Quando ainda estiver a carregar os dados
      <SafeAreaView style={styles.container2} />
    );
  }

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
            <Text style={styles.titulo}>Actualizar Dados</Text>
            <Text style={styles.subtitle}>Vamos começar</Text>
          </View>
          <ScrollView>
            <View style={styles.form}>
              {inputFields.map((field, index) => (
                <Controller
                  key={index}
                  control={control}
                  name={field.name}
                  render={({field: {onChange, onBlur, value}}) => (
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
              ))}
              <View style={styles.buutonConatiner}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleSubmit(onSubmit)}>
                  <Text style={styles.TextButton}>Confirmar</Text>
                </TouchableOpacity>
              </View>
              {updateSuccess && (
                <Text style={styles.successMessage}>
                  Os dados foram atualizados!
                </Text>
              )}
              {updateSuccess === false && (
                <Text style={styles.successError}>Dados Não Atualizados!</Text>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpdatePerfilScreen;
