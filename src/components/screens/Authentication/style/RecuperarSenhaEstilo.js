import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  cabecalho: {
    alignItems: 'center',
    marginBottom: 40,
    right: 125,
  },
  titulo: {
    left: 50,
    fontSize: 22,
    color: '#D6001B',
  },
  BtnVoltar: {
    right: 100
  },
  form: {
    paddingHorizontal: 20,
    top: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#e5e7e9',
    fontSize: 15,
    color: '#000'
  },
  botaoContainer: {
    alignItems: 'center',
    marginTop: 1,
    bottom: 30,
    height: 50,
  },
  subtitle: {
    left: 50,
    fontSize: 18,
    color: '#000'
  },
  container2: {
    backgroundColor: '#D6001B',
    width: '100%',
    height: '100%',
  },
  camada1: {
    backgroundColor: 'white',
    width: '100%',
    height: '95%',
    position: 'absolute',
    bottom: 0,
    marginBottom: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  esqueceu: {
    marginTop: 25,
    color: 'black',
    marginBottom: -70,
  },
});
