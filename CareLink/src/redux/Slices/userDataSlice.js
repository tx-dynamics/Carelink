import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userData: {},
  accessToken: '',
  refreshToken: '',
  completeProfile: false,
  deviceToken: '',
  fcmToken: '',
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
    setcompleteProfile: (state, action) => {
      state.completeProfile = action.payload;
    },
    setDeviceToken: (state, action) => {
      state.deviceToken = action.payload;
    },
    setFcmToken: (state, action) => {
      state.fcmToken = action.payload;
    },
  },
});

export const {
  setUserData,
  accessToken,
  refreshToken,
  setCompleteProfile,
  setDeviceToken,
  setFcmToken,
} = userDataSlice.actions;
export default userDataSlice.reducer;
