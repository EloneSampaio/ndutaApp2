import {createSlice} from '@reduxjs/toolkit';
import {authenticate, logout} from '../actions/authThunk';
import {setToken} from '../actions/AuthAction';

const initialState = {
  status: false,
  loggedIn: false,
  user: {},
  token: null,
  error: {},
};

const authReducer = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder.addCase(authenticate.pending, (state, action) => {
      state.status = true;
    });
    builder.addCase(authenticate.fulfilled, (state, action) => {
      state.status = false;
      state.token = action.payload;
      state.loggedIn = true;
      state.error = null; // Limpa qualquer erro anterior
    });
    builder.addCase(authenticate.rejected, (state, action) => {
      state.status = false;
      state.error = action.error.message; // Armazena o erro na store
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.loggedIn = false;
      state.token = null;
      state.user = {};
      state.error = null; // Limpa qualquer erro anterior
    });

    builder.addCase(setToken, (state, action) => {
      state.loggedIn = true;
      state.token = action.payload;
      state.user = {};
      state.error = null; // Limpa qualquer erro anterior
    });
  },
});

export default authReducer.reducer;