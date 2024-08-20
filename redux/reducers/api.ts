import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    login: (state, action) => {},
  },
});

export const { login } = apiSlice.actions;

const apiReducer = apiSlice.reducer;
export default apiReducer;
