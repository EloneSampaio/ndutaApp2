import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import SplashScreen from '../../components/screens/Authentication/SplashScreen';
import BemVindoScreen from '../../components/screens/Authentication/BemVindoScreen';
import LoginScreen from '../../components/screens/Authentication/LoginScreen';
import OTPAuthScreen from '../../components/screens/Authentication/OTPAuthScreen';
import RegistrationScreen from '../../components/screens/Authentication/RegistrationScreen';
import NovaSenhaScreen from '../../components/screens/Authentication/parts/NovaSenha';
import OkMessageScreen from '../../components/screens/Authentication/parts/OkMessageScreen';
import RecuperSenhaScreen from '../../components/screens/Authentication/parts/RecuperarSenha';

const Stack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="SplashCreen" component={SplashScreen} />
      <Stack.Screen name="RecuperSenha" component={RecuperSenhaScreen} />
      <Stack.Screen name="BemVindoScreen" component={BemVindoScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OTP" component={OTPAuthScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="NovaSenha" component={NovaSenhaScreen} />
      <Stack.Screen name="OkMessage" component={OkMessageScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticationNavigator;
