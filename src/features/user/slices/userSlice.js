import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {},
  error: {},
};

const userReducer = createSlice({
  name: 'user',
  initialState,
});

export default userReducer.reducer;
