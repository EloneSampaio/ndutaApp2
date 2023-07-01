import React from 'react';
import {View, Text, Image} from 'react-native';
import {Input, Icon} from 'react-native-elements';
import styles from './styles/estilo';

const RouteInput = ({NameUser, destination, setModalVisible}) => (
  <View style={styles.modalContentInput}>
    <View style={styles.header}>
      <Text style={styles.NomeUser}>{NameUser}, Para Onde Vais?</Text>
      <View style={styles.favorite}>
        <Image
          style={styles.heartIcon}
          source={require('../../../assets/images/coracao.png')}
        />
        <Text styles={styles.favorite}>Favorito</Text>
        <View />
      </View>
    </View>
    <Input
      containerStyle={styles.modalContainer}
      inputStyle={styles.searchInput}
      placeholder="Digite o destino"
      value={destination}
      onFocus={() => setModalVisible(true)}
      leftIcon={<Icon name="place" size={20} color="green" />}
    />
  </View>
);

export default RouteInput;
