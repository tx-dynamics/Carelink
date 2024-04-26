import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  fromProfile: false,
};

export const appSlice = createSlice({
  name: 'splash',
  initialState,
  reducers: {
    fromProfile: (state, action) => {
      state.fromProfile = action.payload;
    },
  },
});

export const {fromProfile} = appSlice.actions;

export default appSlice.reducer;
