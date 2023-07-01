import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  inputContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',

    padding: 10,
  },
  AddressInput: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    padding: 10,
    fontSize: 16,
    borderRadius: 20, // adicione o raio que você deseja para os cantos arredondados
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    color: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  suggestionItemContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  suggestionItemText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },

  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },

  suggestionsContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  suggestionText: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: '#000',
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
  modalContainer: {
    flex: 1,
    // backgroundColor: '#076',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    padding: 20,
    marginTop: 80,
    marginVertical: 10,
  },
  modalInput: {
    backgroundColor: '#C0C0C0',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 10,
    height: 45,
    color: '#000',
  },
  modalContentInput: {
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
    height: 170,
  },
  NomeUser: {
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  heartIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  favorite: {
    flexDirection: 'row',
    marginTop: 40,
    right: -80,
    color: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -60,
  },
  input: {
    width: '100%',
    height: 40,
    fontSize: 18,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    elevation: 3,
    backgroundColor: '#fff',
    marginBottom: -20,
    marginTop: 70,
    color: '#000',
  },
});
