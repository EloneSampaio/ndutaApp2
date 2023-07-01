// Menu item Tipo Servico

import React, {useState} from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import estilo from '../style/TipoServicoEstilo';
import ICONS from './iconServico';

const ItemServico = ({text, iconName, selectedItem, handlePress}) => {
  const itemStyle = [
    estilo.estilo.BotaoEsquerdo,
    selectedItem === text && estilo.estilo.selectedItem,
  ];

  return (
    <TouchableOpacity style={itemStyle} onPress={handlePress}>
      <Image source={ICONS[iconName]} style={estilo.estilo.img} />
      <Text style={estilo.estilo.texto}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ItemServico;
