import { createSlice } from "@reduxjs/toolkit";

export const urlSlice = createSlice({
    name: 'urlFinder',
    initialState: {url: '/'},
    reducers:{
        setUrl: (state, action)=>{
            state.url = action.payload
        }
    }
})