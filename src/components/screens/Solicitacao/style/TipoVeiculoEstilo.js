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
    marginHorizontal: 0,
    marginVertical: 10,
  },
  BotaoEsquerdo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 150,
    height: 60,
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    borderColor: '#D6001B',
    margin: 10,
  },
  img: {
    marginTop: -50,
    height: 75,
    width: 90,
  },
  texto: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginTop: -20,
    alignSelf: 'center',
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
  selectedItem: {
    backgroundColor: 'red',
  },
});

export default {estilo};
