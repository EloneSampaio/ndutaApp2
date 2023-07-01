import S from '../../../common/myCommon/separador';
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {estilo} from './css_conversas';

const DATA = [
  {
    id: '1',
    Nome: 'Agostinho Manuel',
    Imagem: require('../../../../assets/icones/avatar.png'),
    sms: 'Ola quero ir em casa',
    tempo: '12:20 AM',
  },
];

const renderItem = ({item}) => (
  <SafeAreaView>
    <TouchableOpacity>
      <View style={estilo.item}>
        <Image source={item.Imagem} style={estilo.img} />
        <View style={estilo.orientacaoDasSms}>
          <Text style={estilo.titulo}>{item.Nome}</Text>
          <Text style={estilo.tempo}>{item.tempo}</Text>
          <Image
            source={require('../../../../assets/icones/online.png')}
            style={estilo.iconeOnline}
          />
        </View>

        <Text style={estilo.sms}>{item.sms}</Text>
      </View>
    </TouchableOpacity>
    <S />
  </SafeAreaView>
);

const A = () => {
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

const styles = StyleSheet.create({});

export default A;
