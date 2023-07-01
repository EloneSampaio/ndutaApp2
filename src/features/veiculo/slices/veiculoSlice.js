import {createSlice} from '@reduxjs/toolkit';
import {veiculoApi} from '../services/veiculoService';

const initialState = {
  status: 'idle',
  data: {},
  error: null,
};

const veiculoReducer = createSlice({
  name: 'veiculo',
  initialState,

  extraReducers: builder => {
    builder
      .addMatcher(
        veiculoApi.endpoints.getUserData.matchFulfilled,
        (state, action) => {
          state.data = action.payload;
          state.error = null; // Limpa qualquer erro anterior
          state.status = 'sucesso';
        },
      )
      .addMatcher(veiculoApi.endpoints.getUserData.matchPending, state => {
        state.status = 'loading';
      })
      .addMatcher(
        veiculoApi.endpoints.getUserData.matchRejected,
        (state, action) => {
          state.error = action.error;
          state.status = 'failed';
        },
      )
      .addMatcher(
        veiculoApi.endpoints.registro.matchRejected,
        (state, action) => {
          state.data = action.payload;
          state.error = null; // Limpa qualquer erro anterior
          state.status = 'sucesso';
        },
      )
      .addMatcher(veiculoApi.endpoints.registro.matchPending, state => {
        state.status = 'loading';
      })
      .addMatcher(
        veiculoApi.endpoints.registro.matchRejected,
        (state, action) => {
          state.error = action.error;
          state.status = 'failed';
        },
      );
  },
});

export default veiculoReducer.reducer;

//Notem que agora uso addMatcher em vez de addCase.
//Além disso, usamos localizacoesApi.endpoints.getLocalizacoesAll.matchFulfilled para lidar com a ação de sucesso.
// Isso é possível porque createApi do redux-toolkit gera um conjunto de ações e redutores automatizados
//com o nome dos endpoints que você define em seu endpoints builder.
//Com isso, o reducer irá lidar com as ações automaticamente e
//alterar o status e os dados do estado de acordo com o resultado da requisição da API.
