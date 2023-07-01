import { StyleSheet } from 'react-native';

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
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D6001B',
    right: 100
  },
  form: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#F4F8FB',
    color: '#000',
    fontSize: 16,
  },
  botaoContainer: {
    alignItems: 'center',
    marginTop: -40,
  },
  subtitle: {
    fontSize: 12,
    color: '#000',
    right: 100
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
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  esqueceu: {
    marginTop: -215,
    color: 'black',
    textAlign: 'right',
    left: -18,
    fontSize: 15
  },
  error: {
    marginTop: 0,
    color: 'red',
    textAlign: 'left',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    height: 40,
    borderRadius: 0,
    backgroundColor: '#4a90e2',
 
  },
  facebookButton: {
    backgroundColor: '#ECF8F9',
  },
  googleButton: {
    backgroundColor: '#ECF8F9',
  },
  googleIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  
  buttonText: {
    color: '#0e0872',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  entrarCom: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },

});
