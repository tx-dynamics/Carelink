import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  listing: {},
  availableListing: [],
  bookedListing: [],
};

export const roomListingSlice = createSlice({
  name: 'roomListing',
  initialState,
  reducers: {
    setListingData: (state, action) => {
      state.value = action.payload;
    },
    setAvailableData: (state, action) => {
      state.availableListing = action.payload;
    },
    setBookedData: (state, action) => {
      state.bookedListing = action.payload;
    },
  },
});

export const {setListingData, setAvailableData, setBookedData} =
  roomListingSlice.actions;

export default roomListingSlice.reducer;
