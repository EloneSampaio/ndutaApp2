/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import estilo from '../style/TipoVeiculoEstilo';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useGetTipoVeiculosAllQuery} from '../../../../features/servico/services/servicoService';

const Menu = ({tipoServico}) => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(null);
  const token = useSelector(state => state.auth.token);

  const {data: categoriaServico} = useGetTipoVeiculosAllQuery(null, {
    skip: !token,
  });
  console.log(categoriaServico);

  // Menu item Tipo Servico
  const MenuItem = ({source, text}) => {
    const handlePress = () => {
      console.log(tipoServico);
      setSelectedItem(text);
      navigation.navigate('InserirEndereco', {tipoServico});
    };

    return (
      <TouchableOpacity
        style={[
          estilo.estilo.BotaoEsquerdo,
          selectedItem === text && estilo.estilo.selectedItem, // apply selected style conditionally
        ]}
        onPress={handlePress}>
        <Image source={source} style={estilo.estilo.img} />
        <Text style={estilo.estilo.texto}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const renderContent = () => {
    return (
      <View style={estilo.estilo.modalContainer}>
        <View style={estilo.estilo.GrupoBotao}>
          <View style={estilo.estilo.GrupoBotaoColuna}>
            <MenuItem
              source={require('../../../../assets/icones/suv.png')}
              text="Suv"
            />
            <MenuItem
              source={require('../../../../assets/icones/suv.png')}
              text="Economico"
            />
          </View>
          <View style={estilo.estilo.GrupoBotaoColuna}>
            <MenuItem
              source={require('../../../../assets/icones/carrinha.png')}
              text="Carrinha"
            />
            <MenuItem
              source={require('../../../../assets/icones/familiar.png')}
              text="Familiar"
            />
          </View>
        </View>
      </View>
    );
  };

  return <>{renderContent()}</>;
};

export default Menu;
