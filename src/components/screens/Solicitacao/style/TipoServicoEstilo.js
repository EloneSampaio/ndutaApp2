import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
  GrupoBotao: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  GrupoBotaoColuna: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  BotaoEsquerdo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    width: 150,
    padding: 10,
    borderRadius: 10,
    elevation: 7,
    borderColor: '#D6001B',
    margin: 5,
  },
  img: {
    height: 35,
    width: 35,
  },
  texto: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    marginBottom: 5, // Ajuste a margem inferior para aproximar os textos dos carros
    right: 10,
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '99%',
    height: '35%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    elevation: 4,
    borderColor: '#fff',
    justifyContent: 'center',
    marginTop: 10,
  },
  selectedItem: {
    backgroundColor: 'red',
  },
});

export default {estilo};
