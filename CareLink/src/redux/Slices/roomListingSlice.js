import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  rooms: [
    {
      id: 0,
      label: 'Room 1',
      value: 'Room1',
    },
  ],
  listing: {},
  availableListing: [],
  bookedListing: [],
};

export const roomListingSlice = createSlice({
  name: 'roomListing',
  initialState,
  reducers: {
    saveRooms: (state, action) => {
      state.rooms = action.payload;
    },
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

export const {saveRooms, setListingData, setAvailableData, setBookedData} =
  roomListingSlice.actions;

export default roomListingSlice.reducer;
