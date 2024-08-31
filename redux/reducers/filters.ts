import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedOptionFilter {
  categoryName: string;
  selectedOptions: string[];
}

interface SelectedRangeFilter {
  categoryName: string;
  selectedRange: [number, number];
}

interface FiltersState {
  isOpen: boolean;
  selectedOptionFilters: SelectedOptionFilter[];
  selectedRangeFilters: SelectedRangeFilter[];
}

const initialState: FiltersState = {
  isOpen: false,
  selectedOptionFilters: [],
  selectedRangeFilters: [],
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
    // Add or update selected option filter
    setSelectedOptionFilter(state, action: PayloadAction<SelectedOptionFilter>) {
      const index = state.selectedOptionFilters.findIndex(
        (filter) => filter.categoryName === action.payload.categoryName
      );
      if (index !== -1) {
        state.selectedOptionFilters[index] = action.payload;
      } else {
        state.selectedOptionFilters.push(action.payload);
      }
    },
    // Add or update selected range filter
    setSelectedRangeFilter(state, action: PayloadAction<SelectedRangeFilter>) {
      const index = state.selectedRangeFilters.findIndex(
        (filter) => filter.categoryName === action.payload.categoryName
      );
      if (index !== -1) {
        state.selectedRangeFilters[index] = action.payload;
      } else {
        state.selectedRangeFilters.push(action.payload);
      }
    },
    // Reset all filters
    resetFilters(state) {
      state.selectedOptionFilters = [];
      state.selectedRangeFilters = [];
    },
  },
});

export const {
  openFiltersModal,
  closeFiltersModal,
  toggleFiltersModal,
  setSelectedOptionFilter,
  setSelectedRangeFilter,
  resetFilters,
} = filterSlice.actions;

const filtersReducer = filterSlice.reducer;
export default filtersReducer;
