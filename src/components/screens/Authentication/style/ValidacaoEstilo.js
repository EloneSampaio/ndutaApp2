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
    right: 130,  
  },
  titulo: {
    left: 30,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#D6001B',
  },
  form: {
    paddingHorizontal: 20,
    top: 200,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#F4F8FB',
    fontSize: 15,
  },
  botaoContainer: {
    alignItems: 'center',
    marginTop: 0,
    bottom: 90,
    height: 50,
  },
  subtitle: {
    left: 30,
    fontSize: 20,
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
});
