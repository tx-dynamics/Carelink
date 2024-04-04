import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userData: {},
  accessToken: '',
  refreshToken: '',
  completeProfile: false,
};

const userDataSlice = createSlice({
  name: 'userDataSlice',
  initialState,
  reducers: {
    accessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    refreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setCompleteProfile: (state, action) => {
      state.completeProfile = action.payload;
    },
  },
});

export const {setUserData, accessToken, refreshToken, setCompleteProfile} =
  userDataSlice.actions;
export default userDataSlice.reducer;
