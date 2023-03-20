import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: { category: "New Videos" },
  reducers: {
    selectCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});
