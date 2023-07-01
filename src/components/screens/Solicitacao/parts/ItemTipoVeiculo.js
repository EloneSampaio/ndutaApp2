// Menu item Tipo Servico

import React, {useState} from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import estilo from '../style/TipoServicoEstilo';
import ICONS from '../parts/iconTipoVeiculo';

const ItemTipoVeiculo = ({iconName, text, handlePress, selectedItem}) => {
  console.log('>>>>>> ICON:', iconName);
  const itemStyle = [
    estilo.estilo.BotaoEsquerdo,
    selectedItem === text && estilo.estilo.selectedItem, // apply selected style conditionally
  ];

  return (
    <TouchableOpacity style={itemStyle} onPress={handlePress}>
      <Image source={ICONS[iconName]} style={estilo.estilo.img} />
      <Text style={estilo.estilo.texto}>{text || 'N/A'}</Text>
    </TouchableOpacity>
  );
};
export default ItemTipoVeiculo;
