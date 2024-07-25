import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  listing: {},
};

export const roomListingSlice = createSlice({
  name: 'roomListing',
  initialState,
  reducers: {
    setListingData: (state, action) => {
      state.value = action.payload;
    },
    setAvailableData: (state, action) => {
      state.value = action.payload;
    },
    setBookedData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setListingData, setAvailableData, setBookedData} =
  roomListingSlice.actions;

export default roomListingSlice.reducer;
