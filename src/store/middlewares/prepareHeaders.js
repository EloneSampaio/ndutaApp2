import AsyncStorage from '@react-native-async-storage/async-storage';

export const prepareHeaders = async headers => {
  headers.set('Accept', 'application/json');

  const token = await AsyncStorage.getItem('token');
  console.log('Token do user ' + token);
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  return headers;
};
