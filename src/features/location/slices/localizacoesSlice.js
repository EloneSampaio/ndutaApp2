import {createSlice} from '@reduxjs/toolkit';
import {locationApi} from '../services/localizacoesService';

const initialState = {
  status: 'idle',
  data: {},
  error: null,
};

const locationReducer = createSlice({
  name: 'location',
  initialState,
});

export default locationReducer.reducer;

//Notem que agora uso addMatcher em vez de addCase.
//Além disso, usamos localizacoesApi.endpoints.getLocalizacoesAll.matchFulfilled para lidar com a ação de sucesso.
// Isso é possível porque createApi do redux-toolkit gera um conjunto de ações e redutores automatizados
//com o nome dos endpoints que você define em seu endpoints builder.
//Com isso, o reducer irá lidar com as ações automaticamente e
//alterar o status e os dados do estado de acordo com o resultado da requisição da API.
