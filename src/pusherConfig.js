import Pusher from 'pusher-js/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ApplicationProperties} from './application.properties';

const getAuthenticationToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    console.log('>>>>>>>>>WEBSTOKEN: ' + token);

    if (!token) {
      console.error('No authentication token found');
    }
    return token;
  } catch (error) {
    console.error('Error retrieving authentication token:', error);
    return null;
  }
};
const pusherConfig = {
  cluster: ApplicationProperties.pusherCluster,
  forceTLS: false,
  wsHost: ApplicationProperties.Url,
  wsPort: 6001,
  wssPort: 6001,
  authEndpoint: ApplicationProperties.UrlAuth,
  auth: {
    headers: {
      Authorization: `Bearer ${getAuthenticationToken()}`,
    },
  },
};

const pusher = new Pusher(
  ApplicationProperties.APP_PUSHER_APP_KEY,
  pusherConfig,
);

export default pusher;
