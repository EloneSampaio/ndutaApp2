import {StyleSheet} from 'react-native';
export const estilo = StyleSheet.create({
  conteiner_principal: {
    backgroundColor: '#D6001B',
    width: '100%',
    height: '100%',
  },
  camada1: {
    backgroundColor: 'white',
    width: '100%',
    height: 640,
    position: 'absolute',
    bottom: 0,
    marginBottom: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  camada2: {
    flex: 7,
    height: 59,
    padding: 1,
  },
  camada3: {
    flex: 7,
    backgroundColor: 'white',
    height: 59,
    padding: 1,
    width: '85%',
    margin: 30,
    borderRadius: 15,
    elevation: 5,
  },
  campo_de_texto: {
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    left: 10,
    fontSize: 18,
    top: 5,
  },
  Pesquisa_conteiner: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  iconeLupa: {
    width: 20,
    height: 20,
    top: 20,
    left: 10,
  },
});
