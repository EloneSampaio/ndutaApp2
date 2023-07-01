import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import ButtonVoltar from '../../common/myCommon/BotaoVoltar';
import {
  widthPercentageToDP,
  heightPercentageToDP,
  listenOrientationChange,
  removeOrientationListener,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D6001B',
    width: '100%',
    height: '100%',
  },
  camada1: {
    backgroundColor: 'white',
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('100%'),
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    top: 20,
  },
  title: {
    color: '#D6001B',
    fontSize: 34,
    bottom: 140,
    margin: 12,
  },
  content: {
    bottom: 160,
    padding: 20,
    fontSize: 18,
  },
});

const TermoScreen = () => {
  useEffect(() => {
    listenOrientationChange();
    return () => {
      removeOrientationListener();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#D6001B'} />
      <View style={styles.camada1}>
        <ButtonVoltar />
        <Text style={styles.title}>Termos e Condições</Text>
        <View>
          <Text style={styles.content}>
            web, este documento também é chamado de “Termos de Serviço” (Tos),
            “Termos de Uso”, EULA (“Contrato de Licença de Usuário Final”),
            “Condições Gerais” ou “Notas Legais”. Os Termos e Condições são nada
            mais que um contrato em que o proprietário esclarece as condições de
            uso de seu serviço. Entre alguns exemplos rápidos estão o uso do
            conteúdo (copyright), as regras que os usuários devem seguir ao
            interagirem uns com os outros no website/app e, por fim, regras
            relacionadas ao cancelamento ou suspensão de uma conta de usuário,
            etc.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TermoScreen;
