import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: null,
    isNewUser: true,
    userType: "",
}

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

    },
})

export const { userSave, isNewUser, userType } = splashSlice.actions

export default splashSlice.reducer