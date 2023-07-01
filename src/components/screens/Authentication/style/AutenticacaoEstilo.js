import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 70,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },



  cabecalho: {
    alignItems: 'center',
    marginBottom: 40,
    right: 150,
    color: '#000'
    },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D6001B',
    marginTop: 50,
    left: 30
  },
  form: {
    paddingHorizontal: 20,
    top: 20,
  },
  input: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 14,
    backgroundColor: '#F4F8FB',
    fontSize: 16,
    color: "#D6001B",
    textAlign: "center",
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',

  },
  botaoContainer: {
    alignItems: 'center',
    marginTop: 0,
    bottom: 50,
    height: 1,
  },
  subtitle: {
    fontSize: 15,
    right: 0,
    color: '#000'
  },
  container2: {
    backgroundColor: '#D6001B',
    width: '100%',
    height: '100%'

  },
  camada1: {
    backgroundColor: 'white',
    width: '100%',
    height: "95%",
    position: 'absolute',
    bottom: 0,
    marginBottom: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50

  },
  Reenviarcodigo: {
    marginTop: 40,
    textAlign: "center",
    color: '#000'
  }
})