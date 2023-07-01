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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D6001B',
    left: 40
  },
  form: {
    paddingHorizontal: 20,
    top: 15,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#ecf0f1',
    color: '#000',
    fontSize: 15,
  },
  botaoContainer: {
    alignItems: 'center',
    marginTop: 100,
    bottom: 30,
    height: 30,
    color: 'red'
  },
  subtitle: {
    fontSize: 12,
    color: '#D6001B',
    left: 40
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
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  buutonConatiner:{
    width: '50%',
    margin: 80,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#D6001B',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
    width: '100%',
    marginTop: -50,
  },
  TextButton:{
    fontSize: 16,
    color: "#000"
  },
  successMessage: {
    color: 'green',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30
  },
  successError: {
    color: 'red',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30
  },
});
