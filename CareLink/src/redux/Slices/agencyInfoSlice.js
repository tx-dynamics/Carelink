import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  agencyName: '',
  agencyExperience: '',
  agencyAbout: '',
  agencyAddress: '',
  agencyApartmentNumber: '',
  agencyProfileImage: '',
  agencyCoverPhoto: '',
};

export const agencyInfoSlice = createSlice({
  name: 'agencyInfoSlice',
  initialState,
  reducers: {
    setAgencyName: (state, action) => {
      state.agencyName = action.payload;
    },
    setAgencyExperience: (state, action) => {
      state.agencyExperience = action.payload;
    },
    setAgencyAbout: (state, action) => {
      state.agencyAbout = action.payload;
    },
    setAgencyAddress: (state, action) => {
      state.agencyAddress = action.payload;
    },
    setAgencyApartmentNumber: (state, action) => {
      state.agencyApartmentNumber = action.payload;
    },
    setAgencyProfileImage: (state, action) => {
      state.agencyProfileImage = action.payload;
    },
    setAgencyCoverPhoto: (state, action) => {
      state.agencyCoverPhoto = action.payload;
    },
  },
});

export const {
  setAgencyName,
  setAgencyExperience,
  setAgencyAbout,
  setAgencyAddress,
  setAgencyApartmentNumber,
  setAgencyProfileImage,
  setAgencyCoverPhoto,
} = agencyInfoSlice.actions;

export default agencyInfoSlice.reducer;
