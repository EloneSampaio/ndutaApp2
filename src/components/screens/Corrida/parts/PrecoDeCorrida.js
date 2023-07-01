import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';

const M = ({options}) => {
  const [modalVisible, setModalVisible] = useState(true);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.optionContainerp}
        onPress={() => setModalVisible(false)}>
        <View style={styles.optionImageContainerp}>
          <Image source={item.image} style={styles.optionImagep} />
        </View>
        <View style={styles.optionTextContainerp}>
          <Text style={styles.optionNamep}>{item.name}</Text>
          <Text style={styles.optionPricep}>{item.price}</Text>
          <Text style={styles.optionWaitTimep}>{item.waitTime}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      {modalVisible && (
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainerp}>
            <View style={styles.modalContentp}>
              <FlatList
                data={options}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.optionsContainerp}
                horizontal={true}
              />
            </View>
          </View>
        </Modal>
      )}
      {!modalVisible && <View />}
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainerp: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContentp: {
    backgroundColor: '#FFF',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 70,
  },
  optionsContainerp: {
    paddingBottom: 35,
  },
  optionContainerp: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1,
  },
  optionImageContainerp: {
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    padding: 10,
  },
  optionImagep: {
    height: 60,
    width: 60,
  },
  optionTextContainerp: {
    marginLeft: 10,
  },
  optionNamep: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionTypep: {
    fontSize: 14,
    color: '#A5A5A5',
  },
  optionPricep: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  optionWaitTimep: {
    fontSize: 14,
    color: '#333',
  },
  button: {
    backgroundColorp: '#D6001B',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonTextp: {
    color: '#333',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default M;
