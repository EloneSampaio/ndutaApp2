import React, {useRef, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Animated, Modal, StyleSheet, Text, View} from 'react-native';
import AddressInput from './AddressInput';
import estilo from './styles/estilo';
import {useGetLocationAllQuery} from '../../../features/location/services/localizacoesService';

import {
  inputValueOrigem,
  inputValueDestino,
} from '../../../features/common/commonSlice';

const DestinoModal = ({visible, onClose}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const position = useRef(new Animated.Value(-100)).current;
  const [isRendered, setIsRendered] = useState(false);
  const {
    data: myAddresses,
    error,
    AddressLoading,
  } = useGetLocationAllQuery(null, {
    skip: !token,
  });

  useEffect(() => {
    if (visible) {
      setIsRendered(true);
      animateModalOpen();
    } else {
      animateModalClose();

      // Add a delay before stopping rendering the Modal to ensure the animation finishes.
      setTimeout(() => setIsRendered(false), 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const animateModalOpen = () => {
    Animated.timing(position, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const animateModalClose = () => {
    Animated.timing(position, {
      toValue: -100,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleSecondInputSubmit = location => {
    if (inputValue1 != null && location != null) {
      console.log(
        'Endereço 1: ',
        inputValue1.lat,
        inputValue1.lng,
        inputValue1.name,
      );
      console.log('Endereço 2: ', location.lat, location.lng, location.name);
      console.log('>>>>>>>>>>> mudando de tela');
      dispatch(inputValueOrigem(inputValue1));
      dispatch(inputValueDestino(location));
      //dispatch(origem_coleta());
      //dispatch(destino_coleta());

      onClose(location);
    } else {
      console.log('input n esta preenchido');
    }
  };

  return (
    isRendered && (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}>
        <View style={styles.modalOverlay}>
          <Animated.View style={[styles.modalContent, {top: position}]}>
            <View style={estilo.modalContainer}>
              <View style={estilo.modalContent}>
                <Text style={estilo.modalText}>Origem</Text>
                <AddressInput
                  addresses={myAddresses}
                  useCurrentLocation
                  onLocationSelect={location => {
                    setInputValue1(location);
                  }}
                />

                <Text style={estilo.modalText}>Destino</Text>

                <AddressInput
                  addresses={myAddresses}
                  onLocationSelect={location => {
                    setInputValue2(location);
                    handleSecondInputSubmit(location);
                  }}
                />
              </View>
            </View>
          </Animated.View>
        </View>
      </Modal>
    )
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ff0f',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
    height: 500,
    position: 'absolute',
    left: 0,
    right: 0,
  },
});

export default DestinoModal;
