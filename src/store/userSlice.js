import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        name: null,
        email: null,
        photo: null
    },
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo
        },
        setSignOutState: (state, action) => {
            state.name = null;
            state.email = null;
            state.photo = null
        }
    }
})

export const userActions = userSlice.actions;
export default userSlice;