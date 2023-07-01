/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();

  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuItemPress = item => {
    console.log(`Pressed ${item}`);
    setMenuVisible(false);
  };

  const handleEditPerfil = () => {
    navigation.navigate('UpdatePerfil');
    setMenuVisible(false);
  };

  const handleDefinicoes = () => {
    navigation.navigate('Definicoes');
    setMenuVisible(false);
  };

  const handleChat = () => {
    navigation.navigate('Chat');
    setMenuVisible(false);
  };

  const handleHistorico = () => {
    navigation.navigate('History');
    setMenuVisible(false);
  };

  const handleFecharConta = () => {
    navigation.navigate('CloseAccount');
  };

  const handleVoltar = () => {
    setMenuVisible(false);
    navigation.goBack();
  };

  const handleConfiguracao = () => {
    setMenuVisible(true);
  };

  const handleFecharMenu = () => {
    setMenuVisible(false);
  };

  return (
    <View
      style={{
        backgroundColor: '(50,50,50)',
        width: '100%',
        height: 50,
        elevation: 7,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row'}}>
        {/* <TouchableWithoutFeedback onPress={handleVoltar}>
          <Icon name="long-arrow-left" size={30} style={{ color: '#000', width: '20%', height: 30, resizeMode: 'contain', left: -50 }} />
        </TouchableWithoutFeedback> */}

        <TouchableWithoutFeedback
          onPress={handleMenuItemPress.bind(this, 'nduta')}>
          <Image
            source={require('../../../../assets/images/ndutaVermelho.png')}
            style={{
              width: '50%',
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              resizeMode: 'contain',
              right: -8,
            }}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleConfiguracao}>
          <Icon
            name="sliders"
            size={30}
            style={{
              width: '20%',
              height: 30,
              resizeMode: 'contain',
              position: 'absolute',
              left: 240,
              color: '#000',
            }}
          />
        </TouchableWithoutFeedback>
      </View>
      <Modal visible={menuVisible} animationType="slide">
        <View style={styles.menuContainer}>
          <View style={styles.closeButton}>
            <TouchableWithoutFeedback onPress={handleFecharMenu}>
              <View style={styles.menuItem}>
                <Icon
                  name="close"
                  size={30}
                  style={styles.menuIconSair}
                  color={'red'}
                />
                <Text style={styles.menuText} />
              </View>
            </TouchableWithoutFeedback>
          </View>

          <TouchableWithoutFeedback onPress={handleEditPerfil}>
            <View style={styles.menuItem}>
              <Icon name="user" size={20} style={styles.menuIcon} />
              <Text style={styles.menuText}>Perfil</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleDefinicoes}>
            <View style={styles.menuItem}>
              <Icon name="cog" size={20} style={styles.menuIcon} />
              <Text style={styles.menuText}>Definições</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleHistorico}>
            <View style={styles.menuItem}>
              <Icon name="history" size={20} style={styles.menuIcon} />
              <Text style={styles.menuText}>Histórico</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleChat}>
            <View style={styles.menuItem}>
              <Icon name="comments" size={20} style={styles.menuIcon} />
              <Text style={styles.menuText}>Chat</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleFecharConta}>
            <View style={styles.menuItem}>
              <Icon name="close" size={20} style={styles.menuIcon} />
              <Text style={styles.menuText}>Fechar Conta</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.menuItem}>
              <Icon name="life-ring" size={20} style={styles.menuIcon} />
              <Text style={styles.menuText}>Suporte</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  header: {
    backgroundColor: '#323232',
    width: '100%',
    height: 50,
    elevation: 7,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    color: '#000',
    width: '20%',
    height: 30,
    resizeMode: 'contain',
  },
  logo: {
    width: '50%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    right: 40,
  },
  menuContainer: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 10,
  },
  closeButton: {
    padding: 10,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuIcon: {
    marginRight: 10,
    color: '#000',
  },
  menuText: {
    fontSize: 16,
    color: '#000',
  },
});

export default App;
