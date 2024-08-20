import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./reducers/api";

export const store = configureStore({
  reducer: {
    api: apiReducer
  }
});