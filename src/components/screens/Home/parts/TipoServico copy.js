/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import estilo from '../style/TipoServicoEstilo';
import {useNavigation} from '@react-navigation/native';
import {useGetServicosAllQuery} from '../../../../features/servico/services/servicoService';

const App = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(null);
  const token = useSelector(state => state.auth.token);

  const {data: servicos} = useGetServicosAllQuery(null, {
    skip: !token,
  });

  console.log(servicos);
  // Menu item Tipo Servico
  const MenuItem = ({source, text, tipoServico}) => {
    const handlePress = () => {
      console.log(tipoServico);
      setSelectedItem(tipoServico);
      navigation.navigate('SelectVeiculo', {tipoServico});
    };

    const itemStyle = [
      estilo.estilo.BotaoEsquerdo,
      selectedItem === tipoServico && estilo.estilo.selectedItem, // Aplica o estilo se o item estiver selecionado
    ];

    return (
      <TouchableOpacity style={itemStyle} onPress={handlePress}>
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
              source={require('../../../../assets/icones/taxi.png')}
              text="Taxi"
              tipoServico="1"
            />
            <MenuItem
              source={require('../../../../assets/icones/aluguel.png')}
              text="Aluguel"
              tipoServico="2"
            />
          </View>
          <View style={estilo.estilo.GrupoBotaoColuna}>
            <MenuItem
              source={require('../../../../assets/icones/turismo.png')}
              text="Turismo"
              tipoServico="3"
            />
            <MenuItem
              source={require('../../../../assets/icones/casamento.png')}
              text="Casamento"
              tipoServico="4"
            />
          </View>
        </View>
      </View>
    );
  };

  return <>{renderContent()}</>;
};

export default App;
