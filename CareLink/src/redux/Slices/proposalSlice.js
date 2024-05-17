import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  proposalAttender: '',
  itemListing: {},
  proposalUsers: [],
};

export const proposalSlice = createSlice({
  name: 'proposalSlice',
  initialState,
  reducers: {
    setProposalAttender: (state, action) => {
      state.proposalAttender = action.payload;
    },
    setItemListing: (state, action) => {
      state.itemListing = action.payload;
    },
    setProposalUsers: (state, action) => {
      state.proposalUsers = action.payload;
    },
  },
});

export const {setProposalAttender, setItemListing, setProposalUsers} =
  proposalSlice.actions;

export default proposalSlice.reducer;
