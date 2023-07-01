import React, {useEffect} from 'react';
import Pusher from 'pusher-js/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ApplicationProperties} from '../../../application.properties';
import {Text, View} from 'react-native';

const MyComponent = () => {
  useEffect(() => {
    const initializePusher = async () => {
      const token = await AsyncStorage.getItem('token');
      console.log('>>>>>>>>>WEBSTOKEN: ' + token);
      if (!token) {
        console.error('No authentication token found');
        return;
      }

      const pusher = new Pusher(ApplicationProperties.APP_PUSHER_APP_KEY, {
        cluster: ApplicationProperties.pusherCluster,
        forceTLS: false,
        wsHost: ApplicationProperties.Url,
        wsPort: 6001,
        wssPort: 6001,
        authEndpoint: ApplicationProperties.UrlAuth,
        auth: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      });

      pusher.connection.bind('connected', () => {
        console.log('Conectado ao servidor Pusher');
        // Agora você está conectado ao servidor Pusher
        // Faça qualquer operação necessária aqui

        const solicitacaoId = 65;

        // Inscreva-se no canal privado específico da solicitação
        const channelCorrida = pusher.subscribe(
          `solicitacao.status.${solicitacaoId}`,
        );

        const channel = pusher.subscribe('notificacoes');

        // Adicione um evento de "conexão estabelecida" ao canal
        channelCorrida.bind('pusher:subscription_succeeded', () => {
          console.log('Conectado ao canal privado');
        });

        channel.bind('pusher:subscription_succeeded', () => {
          console.log('Conectado ao canal chat');
        });
        // Adicione um evento de "conexão falhou" ao canal
        channelCorrida.bind('pusher:subscription_error', () => {
          console.log('Falha ao conectar ao canal privado');
        });

        channel.bind('notificacoes', data => {
          console.log('Received event from "solicitacao" channel:', data);
          // Trate o evento recebido do canal privado "solicitacao" aqui
        });

        channelCorrida.bind('solicitacao', data => {
          console.log('Received event from "solicitacao" channel:', data);
          console.log('Dados: ', data.solicitacao);
          // Trate o evento recebido do canal privado "solicitacao" aqui
        });
      });

      pusher.connect();
    };

    initializePusher();
  }, []);

  return (
    <View>
      <Text>Exemplo de uso de Pusher no React Native</Text>
    </View>
  );
};

export default MyComponent;
