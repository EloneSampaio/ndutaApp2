import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  motorista: {},
  error: {},
};

const userReducer = createSlice({
  name: 'motorista',
  initialState,
});

export default userReducer.reducer;
