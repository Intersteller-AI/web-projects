import { createSlice } from "@reduxjs/toolkit"

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {isOpen : false},
    reducers:{
        open: (state, action)=>{
            state.isOpen = true
        },
        close: (state, action)=>{
            state.isOpen = false
        },
    }
})
