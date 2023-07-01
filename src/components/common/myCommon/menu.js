/* eslint-disable react-native/no-inline-styles */
import {Text, View, Image, TouchableWithoutFeedback, Modal} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Menu = () => {
  const navigation = useNavigation();
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

  const handleSuporte = () => {};

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
        <TouchableWithoutFeedback onPress={handleVoltar}>
          <Icon
            name="long-arrow-left"
            size={30}
            style={{
              color: '#000',
              width: '20%',
              height: 30,
              resizeMode: 'contain',
              left: -50,
            }}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={handleMenuItemPress.bind(this, 'nduta')}>
          <Image
            source={require('../../../assets/images/ndutaVermelho.png')}
            style={{
              width: '50%',
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              resizeMode: 'contain',
              right: 40,
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
              right: -95,
              color: '#000',
            }}
          />
        </TouchableWithoutFeedback>
      </View>

      <Modal visible={menuVisible} animationType="slide">
        <View
          style={{
            flex: 1,
            backgroundColor: '#f1f1f1',
            padding: 10,
          }}>
          <TouchableWithoutFeedback onPress={handleFecharMenu}>
            <View
              style={{
                padding: 10,
                alignSelf: 'flex-end',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'red',
                }}>
                Fechar
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleEditPerfil()}>
            <View
              style={{
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                color: '#000',
              }}>
              <Text style={{fontSize: 16, color: '#000'}}>Perfil</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleDefinicoes()}>
            <View
              style={{
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
              }}>
              <Text style={{fontSize: 16, color: '#000'}}>Definições</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleHistorico()}>
            <View
              style={{
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                color: '#000',
              }}>
              <Text style={{fontSize: 16, color: '#000'}}>Histórico</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleChat()}>
            <View
              style={{
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                color: '#000',
              }}>
              <Text style={{fontSize: 16, color: '#000'}}>Chat</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleFecharConta()}>
            <View
              style={{
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                color: '#000',
              }}>
              <Text style={{fontSize: 16, color: '#000'}}>Fechar Conta</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleSuporte()}>
            <View
              style={{
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                color: '#000',
              }}>
              <Text style={{fontSize: 16, color: '#000'}}>Suporte</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </View>
  );
};

export default Menu;
