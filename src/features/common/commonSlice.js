import {createAction, createSlice} from '@reduxjs/toolkit';

export const resetCorrida = createAction('common/resetCorrida');

const commonReducer = createSlice({
  name: 'common',
  initialState: {
    inputValueOrigem: null,
    inputValueDestino: null,
    distanciaCorrida: null,
    duracaoCorrida: null,
    corridaInfo: null, //informações sobre a corrida
    statusCorrida: null,
    idSolicitacao: null,
    usuario: null,
    dadosCorrida: [],
  },
  reducers: {
    inputValueOrigem: (state, action) => {
      state.inputValueOrigem = action.payload;
    },
    inputValueDestino: (state, action) => {
      state.inputValueDestino = action.payload;
    },
    corridaInfo: (state, action) => {
      state.corridaInfo = action.payload;
    },
    distanciaCorrida: (state, action) => {
      state.distanciaCorrida = action.payload;
    },
    duracaoCorrida: (state, action) => {
      state.duracaoCorrida = action.payload;
    },
    statusCorrida: (state, action) => {
      state.statusCorrida = action.payload;
    },
    setIdSolicitacao: (state, action) => {
      state.idSolicitacao = action.payload;
    },
    setUsuario: (state, action) => {
      state.usuario = action.payload;
    },
    resetCorrida: state => {
      state.statusCorrida = null;
      state.corridaInfo = null;
    },
    setDadosCorrida: (state, action) => {
      state.dadosCorrida = state.dadosCorrida.concat(action.payload);
    },
    resetDadosCorrida: state => {
      state.dadosCorrida = null;
    },
  },
});

export const {
  inputValueOrigem,
  inputValueDestino,
  corridaInfo,
  statusCorrida,
  setIdSolicitacao,
  setUsuario,
  setDadosCorrida,
} = commonReducer.actions;

export default commonReducer.reducer;
