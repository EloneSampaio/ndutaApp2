import {StyleSheet} from 'react-native';
export const estilo = StyleSheet.create({
  conteiner: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 60,
    margin: 6,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    left: 60,
  },
  sms: {
    fontSize: 14,
    left: 60,
  },
  tempo: {left: 9, fontWeight: 'bold'},

  img: {
    width: 50,
    height: 50,
    position: 'absolute',
    borderRadius: 100,
    margin: 5,
  },
  iconeLupa: {
    width: 15,
    height: 15,
    position: 'absolute',
    borderRadius: 100,
    margin: 31,
  },
  iconeOnline: {
    width: 15,
    height: 15,
    position: 'absolute',
    borderRadius: 100,
    margin: 31,
  },
  orientacaoDasSms: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 4,
  },
});
