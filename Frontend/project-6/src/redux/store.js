import { configureStore, createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "openMenu",
    initialState: { isOpen: false },
    reducers: {
        open: (state, action) => {
            state.isOpen = true
        },
        close: (state, action) => {
            state.isOpen = false
        },
    },
});

const profileSlice = createSlice({
    name: "openProfile",
    initialState: { isOpen: false },
    reducers: {
        open: (state, action) => {
            state.isOpen = false
        },
        close: (state, action) => {
            state.isOpen = true
        },
    },
});

const store = configureStore({
    reducer: {
        openMenu: menuSlice.reducer,
        openProfile: profileSlice.reducer,
    },
});


export const actions = menuSlice.actions
export const ProfileActions = profileSlice.actions

export default store;
