import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingsScreen = () => {
  const handleChangeLanguage = () => {
    // Lógica para trocar o idioma
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option}>
        <Icon name="user" size={20} color="#555555" style={styles.icon} />
        <Text style={styles.optionText}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Icon name="bell" size={20} color="#555555" style={styles.icon} />
        <Text style={styles.optionText}>Notificações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Icon name="cog" size={20} color="#555555" style={styles.icon} />
        <Text style={styles.optionText}>Configurações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Icon name="lock" size={20} color="#555555" style={styles.icon} />
        <Text style={styles.optionText}>Privacidade</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Icon name="question-circle" size={20} color="#555555" style={styles.icon} />
        <Text style={styles.optionText}>Ajuda</Text>
      </TouchableOpacity>



      {/* <TouchableOpacity style={styles.option}>
        <Icon name="heart" size={20} color="#555555" style={styles.icon} />
        <Text style={styles.optionText}>Favoritos</Text>
      </TouchableOpacity> */}


      <TouchableOpacity style={styles.option} onPress={handleChangeLanguage}>
        <Icon name="globe" size={20} color="#555555" style={styles.icon} />
        <Text style={styles.optionText}>Trocar Idioma</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Icon name="power-off" size={20} color="#555555" style={styles.icon} />
        <Text style={styles.optionText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#555555',
  },
});

export default SettingsScreen;
