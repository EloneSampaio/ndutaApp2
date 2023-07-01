import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import AuthenticationNavigator from './navigators/AuthenticationNavigator';
import HomeNavigator from './navigators/MainNavigator';

import UserNavigator from './navigators/UserNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  console.log(token);
  return (
    <Stack.Navigator
      onBeforeStart={() => dispatch({type: 'RESET_STATE'})}
      screenOptions={{
        headerShown: false, // esconde o título da screen
      }}>
      {token ? (
        <>
          <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
          <Stack.Screen name="UserNavigator" component={UserNavigator} />
        </>
      ) : (
        <Stack.Screen
          name="AuthenticationNavigator"
          component={AuthenticationNavigator}
        />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
