import { createSlice } from "@reduxjs/toolkit";
export const changeNavs = createSlice({
  name: "change-nav",
  initialState: { nav: "landing" },
  reducers: {
    changeNav: (state, data) => {
      state.nav = data.payload;
    },
  },
});
export const { changeNav } = changeNavs.actions;
