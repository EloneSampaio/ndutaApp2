import {createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ApplicationProperties} from '../../../application.properties';

export const authenticate = createAsyncThunk(
  'auth/authenticate',
  async (credentials, {dispatch}) => {
    console.log('authThunk called');

    try {
      const response = await fetch(ApplicationProperties.baseUrl + '/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.access_token;
        console.log('token:', token);
        await AsyncStorage.setItem('token', token);
        return token;
      } else {
        const error = new Error('Authentication failed');
        console.error('Authentication failed:', error);
        throw error;
      }
    } catch (error) {
      console.error('Authentication failed:', error);
      throw error;
    }
  },
);

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, {dispatch}) => {
    console.log('authThunk called');

    try {
      const response = await fetch(
        ApplicationProperties.baseUrl + '/register',
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.ok) {
        const dados = await response.json();
        const token = dados.access_token;
        console.log('token:', token);
        await AsyncStorage.setItem('token', token);
        return token;
      } else {
        const error = new Error('Authentication failed');
        console.error('Authentication failed:', error);
        throw error;
      }
    } catch (error) {
      console.error('Authentication failed:', error);
      throw error;
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await AsyncStorage.removeItem('token');
});
