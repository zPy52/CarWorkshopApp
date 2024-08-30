import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    openFiltersModal(state) {
      state.isOpen = true;
    },
    closeFiltersModal(state) {
      state.isOpen = false;
    },
    toggleFiltersModal(state) {
      state.isOpen = !state.isOpen;
    },
    setFiltersModalState(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const { openFiltersModal, closeFiltersModal, toggleFiltersModal, setFiltersModalState } = filterSlice.actions;

const filtersReducer = filterSlice.reducer;
export default filtersReducer;
