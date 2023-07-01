import React, {useEffect, useState} from 'react';
import {
  View,
  Modal,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

const Item = ({item, handleAddServicos}) => (
  <TouchableOpacity
    style={styles.optionContainer}
    onPress={() => handleAddServicos(item)}>
    <View style={styles.optionImageContainer}>
      {/*<Image source={item.image} style={styles.optionImage} />*/}
    </View>
    <View style={styles.optionTextContainer}>
      <Text style={styles.optionName}>{item.name}</Text>
      <Text style={styles.optionPrice}>{item.preco}</Text>
    </View>
  </TouchableOpacity>
);

const PriceModal = ({visible, options, handleAddServicos}) => {
  const [modalVisible, setModalVisible] = useState(visible);
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <Modal visible={modalVisible} transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
          <View style={styles.optionsContainer}>
            <FlatList
              data={options}
              renderItem={({item}) => (
                <Item item={item} handleAddServicos={handleAddServicos} />
              )}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.optionsListContainer}
              horizontal={true}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 8,
  },
  closeButtonText: {
    color: 'gray',
  },
  optionsContainer: {
    maxHeight: 400,
  },
  optionsListContainer: {
    paddingHorizontal: 8,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  optionImageContainer: {
    marginRight: 8,
  },
  optionImage: {
    width: 40,
    height: 40,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionName: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  optionPrice: {
    color: 'gray',
    fontSize: 14,
    marginBottom: 2,
  },
  optionWaitTime: {
    fontSize: 14,
    color: 'gray',
  },
});

export default PriceModal;
