import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D6001B',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 60,
  },
  textContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 1,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
    color: '#fff',
  },
  buttonsContainer: {
    width: '90%',
    flexDirection: 'column',
    marginTop: 15,
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRegistrar: {
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  idiomaContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  idiomaButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },

  idiomaButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D6001B',
  },
  modalContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 40, // Increase the value to adjust the height
    paddingHorizontal: 50,
    borderColor: '#fff',
    borderWidth: 2,
    borderTopWidth: 0,
    height: 200,
  
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0.5, 0, 0.1)',
    justifyContent: 'flex-end', // Align the modal to the bottom

  },
  modalButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15, // Increase the value to add more spacing
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    marginRight: 40,
    marginLeft: 40
  },

  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D6001B',
    paddingHorizontal: 5, // Add padding to provide spacing between letters
  },
  imageShadow: {
    borderRadius: 100,
    width: 200,
    height: 200,
    backgroundColor: 'transparent', // Define o fundo como transparente
    shadowColor: 'rgba(255, 255, 255, 500)', // Cor branca com opacidade 0.3
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
});
