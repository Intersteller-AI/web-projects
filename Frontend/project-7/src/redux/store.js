import { createSlice, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { youtubeApi } from "./fetchData";
import { menuSlice } from "./menuSlice";
import { categorySlice } from "./categorySlice";

export const menuActions = menuSlice.actions
export const categoryActions = categorySlice.actions  

export const store = configureStore({
    reducer:{
        menu: menuSlice.reducer,
        category: categorySlice.reducer,
        [youtubeApi.reducerPath]: youtubeApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(youtubeApi.middleware)
})

export default store
