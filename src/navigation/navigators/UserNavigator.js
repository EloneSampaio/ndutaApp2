import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UpdatePerfil from '../../components/screens/Cliente/editarPerfil/UpdatePerfilScreen';
import PerfilScreen from '../../components/screens/Cliente/perfilMotorista/ResumoPerfil';
import CloseAccountScreen from '../../components/screens/Cliente/fecharConta/CloseAccountScreen';

const Stack = createStackNavigator();

const UserNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // esconde o título da screen
      }}>
      <Stack.Screen name="CloseAccount" component={CloseAccountScreen} />
      <Stack.Screen name="Perfil" component={PerfilScreen} />
      <Stack.Screen name="UpdatePerfil" component={UpdatePerfil} />
    </Stack.Navigator>
  );
};

export default UserNavigator;
