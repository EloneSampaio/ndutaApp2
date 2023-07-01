import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import estilo from '../style/TipoServicoEstilo';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTipoServico, setSelectedTipoServico] = useState(null);

  let TipoServico;

  const openModal = tipoServico => {
    setModalVisible(true);
    setSelectedTipoServico(tipoServico); // Armazena o valor de tipoServico em um estado
  };

  //Menu Iten tipo Veiculo: Economicos, Suv, Familiar...
  const MenuItem2 = ({source, text, tipoVeiculo, tipoServico}) => {
    const handlePress = () => {
      console.log(tipoServico);
      navigation.navigate('InserirEndereco', {tipoServico});
    };

    return (
      <TouchableOpacity
        style={estilo.estilo.BotaoEsquerdoMenu2}
        onPress={handlePress}>
        <Image source={source} style={estilo.estilo.imgMenu} />
        <Text style={estilo.estilo.textoMenu2}>{text}</Text>
      </TouchableOpacity>
    );
  };

  //Menu iten  Tipo Servico
  const MenuItem = ({source, text, tipoServico}) => {
    const handlePress = () => {
      console.log(tipoServico);
      openModal(tipoServico);
    };

    return (
      <TouchableOpacity
        style={estilo.estilo.BotaoEsquerdo}
        onPress={handlePress}>
        <Image source={source} style={estilo.estilo.img} />
        <Text style={estilo.estilo.texto}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const renderContent = () => {
    if (modalVisible) {
      return (
        <View style={estilo.estilo.modalContainer}>
          <View style={[estilo.estilo.GrupoBotaoCima]}>
            <MenuItem2
              source={require('../../../../assets/icones/suv.png')}
              text="Suv"
              tipoVeiculo="1"
              tipoServico={selectedTipoServico}
            />
            <MenuItem2
              source={require('../../../../assets/icones/suv.png')}
              text="Economico"
              tipoVeiculo="2"
              tipoServico={selectedTipoServico}
            />
          </View>
          <View style={[estilo.estilo.GrupoBotaoBaixo2]}>
            <MenuItem2
              source={require('../../../../assets/icones/carrinha.png')}
              text="Carrinha"
              tipoVeiculo="3"
              tipoServico={selectedTipoServico}
            />
            <MenuItem2
              source={require('../../../../assets/icones/familiar.png')}
              text="Familiar"
              tipoVeiculo="4"
              tipoServico={selectedTipoServico}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={estilo.estilo.modalContainer}>
          <View style={estilo.estilo.GrupoBotaoCima}>
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
          <View style={estilo.estilo.GrupoBotaoBaixo}>
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
      );
    }
  };

  return <>{renderContent()}</>;
};

export default Menu;
