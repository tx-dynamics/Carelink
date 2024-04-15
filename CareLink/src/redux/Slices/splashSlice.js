import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: null,
  isNewUser: true,
  userType: '',
  onboarding: false,
};

export const splashSlice = createSlice({
  name: 'splash',
  initialState,
  reducers: {
    userSave: (state, action) => {
      state.value = action.payload;
    },
    isNewUser: (state, action) => {
      state.isNewUser = action.payload;
    },
    userType: (state, action) => {
      state.userType = action.payload;
    },
    onBoarding: (state, action) => {
      state.onboarding = action.payload;
    },
  },
});

export const {userSave, isNewUser, userType, onBoarding} = splashSlice.actions;

export default splashSlice.reducer;
