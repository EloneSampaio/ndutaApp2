import React from 'react';
import {StatusBar, SafeAreaView, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BotaoRecto from '../../../common/myCommon/BotaoRecto';
import styles from '../style/ValidacaoEstilo';

const OkMessageScreen = props => {
  const navigation = useNavigation();

  const handleHomeClick = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView style={styles.container2}>
      <StatusBar backgroundColor={'#D6001B'} />
      <View style={styles.camada1}>
        <View style={styles.container}>
          <StatusBar
            style={styles.status}
            barStyle="light-content"
            backgroundColor="#D6001B"
          />
          <View style={styles.form}>
            <Text style={styles.titulo}>Validado!</Text>
            <Text style={styles.subtitle}>Obrigado Por Fazer</Text>
            <Text style={styles.subtitle}>Parte Do Nduta.</Text>
            <View style={styles.botaoContainer}>
              <BotaoRecto titulo={'Continuar'} onPress={handleHomeClick} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OkMessageScreen;
