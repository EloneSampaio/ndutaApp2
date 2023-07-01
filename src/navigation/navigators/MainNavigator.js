import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../components/screens/Home/HomeScreen';
import Definicoes from '../../components/screens/Home/parts/Definicoes';
import ProcessandoPedido from '../../components/screens/Rota/SearchMotoristaLoading';
import MapaScreen from '../../components/screens/Corrida/MapaScreen';
import MotoristaScreen from '../../components/screens/Home/MotoristaScreen';
import HistoryScreen from '../../components/screens/Historico/HistoryScreen';
import ChatScreen from '../../components/screens/Chat/conversas/ChatScreen';
import MessageScreen from '../../components/screens/Chat/mensagens/MessageScreen';
import CorridaDetailsScreen from '../../components/screens/Corrida/detalhesDaCorrida/CorridaDetailsScreen';
import InserirEndereco from '../../components/screens/Corrida/InserirEnderecoWith';
import MyApp from '../../components/screens/Home/MxMyApp';

import UpdatePerfil from '../../components/screens/Cliente/editarPerfil/UpdatePerfilScreen';
import perfilMotorista from '../../components/screens/Cliente/perfilMotorista/ResumoPerfil';
import CloseAccountScreen from '../../components/screens/Cliente/fecharConta/CloseAccountScreen';
import LoginScreen from '../../components/screens/Authentication/LoginScreen';
import TipoVeiculo from '../../components/screens/Solicitacao/TipoVeiculo';
import RouteScreen from '../../components/screens/Rota/RouteScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // esconde o título da screen
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="InserirEndereco" component={InserirEndereco} />
      <Stack.Screen name="RouteScreen" component={RouteScreen} />
      <Stack.Screen name="Definicoes" component={Definicoes} />
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen name="MotoristaScreen" component={MotoristaScreen} />
      <Stack.Screen name="Mapa" component={MapaScreen} />
      <Stack.Screen name="CorridaDetails" component={CorridaDetailsScreen} />
      <Stack.Screen name="UpdatePerfil" component={UpdatePerfil} />
      <Stack.Screen name="CloseAccount" component={CloseAccountScreen} />
      <Stack.Screen name="perfilMotorista" component={perfilMotorista} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ProcessandoPedido" component={ProcessandoPedido} />
      <Stack.Screen name="TipoVeiculo" component={TipoVeiculo} />
      <Stack.Screen name="MyApp" component={MyApp} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
