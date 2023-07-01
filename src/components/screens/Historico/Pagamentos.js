import React, {useEffect} from 'react';
import Separador from '../../common/myCommon/separador';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {userApi} from '../../../features/user/services/userService';
import {useGetUserDataQuery} from '../../../features/user/services/userService';
import {useDispatch, useSelector} from 'react-redux';

const DATA = [
  {
    id: '1',
    Nome: 'Armando Inácio',
    sms: 'Pago por cash',
    tempo: '12:20 AM',
  },
  {
    id: '3',
    Nome: 'Feliciano Cazali',
    sms: 'Pago por cash',
    tempo: '12:20 AM',
  },
  {
    id: '4',
    Nome: 'Elizio Ramos',
    sms: 'Pago por cash',
    tempo: '12:20 AM',
  },
  {
    id: '5',
    Nome: 'Evandro Eusébio',
    sms: 'Pago por cash',
    tempo: '12:20 AM',
  },
  {
    id: '2',
    Nome: 'Mário Coxe',
    sms: 'Pago peolo MC Express',
    tempo: '12:20 AM',
  },
  {
    id: '6',
    Nome: 'Elone Sampaio',
    sms: 'Pago peolo MC Express',
    tempo: '12:20 AM',
  },
];

const renderItem = ({item}) => (
  <SafeAreaView>
    <View style={styles.item}>
      <View style={styles.row}>
        <Text style={styles.title}>{item.Nome}</Text>
        <Text style={styles.time}>{item.tempo}</Text>
      </View>
      <Text style={styles.sms}>{item.sms}</Text>
    </View>
    <Separador />
  </SafeAreaView>
);

const Pagamentos = () => {
  const token = useSelector(state => state.auth.token);
  const {
    data: user,
    error,
    isLoading,
  } = useGetUserDataQuery(null, {
    skip: !token,
  });

  const idUser = user?.user?.id || ''; //ID do usuario
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> id user', idUser);

  const [getPagamentosById] = userApi.useGetPagamentosByIdMutation();

  useEffect(() => {
    onSubmitGetPagamentos(idUser);
  }, []);

  useEffect(() => {
    if (token) {
      onSubmitGetPagamentos(idUser);
    }
  }, [token]);

  const onSubmitGetPagamentos = async idUser => {
    try {
      const result = await getPagamentosById(idUser).unwrap();
      console.log('resultado---------------->>>>>', result);

      const solicitacaoIds = result.map(item => item.solicitacao_id);
      console.log('solicitacao_ids:', solicitacaoIds);
    } catch (error) {
      console.error('falhou', error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 60,
    margin: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    left: 60,
  },
  sms: {
    fontSize: 14,
    left: 60,
  },
  time: {
    right: 17,
    fontWeight: 'bold',
  },
});

export default Pagamentos;
