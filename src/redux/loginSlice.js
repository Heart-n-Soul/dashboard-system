import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  isEmailValid: true,
  isFormValid: false,
  errorMessage: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
      state.isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email);
      state.errorMessage = state.isEmailValid ? '' : 'Incorrect email address';
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    validateForm(state) {
      state.isFormValid = state.email !== '' && state.password !== '' && state.isEmailValid;
    },
  },
});

export const { setEmail, setPassword, validateForm } = loginSlice.actions;

export default loginSlice.reducer;
