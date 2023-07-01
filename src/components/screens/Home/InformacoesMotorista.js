import React from 'react';
import {View, Text} from 'react-native';
import estilo from './style/MotoristaEstilo';

const InformacoesMotorista = ({
  motoristaNome,
  viatura,
  cor,
  telefone,
  placa,
}) => {
  return (
    <View style={estilo.estilo.infoContainer}>
      <Text style={estilo.estilo.label}>Motorista:</Text>
      <Text style={estilo.estilo.motoristaNome}>{motoristaNome}</Text>
      <View style={estilo.estilo.row}>
        <Text style={estilo.estilo.bold}>Viatura:</Text>
        <Text style={estilo.estilo.boldRed}>{viatura}</Text>
      </View>
      <View style={estilo.estilo.row}>
        <Text style={estilo.estilo.bold}>Placa:</Text>
        <Text style={estilo.estilo.boldRed}>{placa}</Text>
      </View>
      <View style={estilo.estilo.row}>
        <Text style={estilo.estilo.bold}>Cor:</Text>
        <Text style={estilo.estilo.boldRed}>{cor}</Text>
      </View>
      <View style={estilo.estilo.row}>
        <Text style={estilo.estilo.bold}>Telefone:</Text>
        <Text style={estilo.estilo.boldRed}>{telefone}</Text>
      </View>
    </View>
  );
};

export default InformacoesMotorista;
