import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./reducers/api";
import filtersReducer from "./reducers/filters";

export const store = configureStore({
  reducer: {
    api: apiReducer,
    filters: filtersReducer
  }
});