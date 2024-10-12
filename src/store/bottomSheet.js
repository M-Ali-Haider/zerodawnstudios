import { createSlice } from "@reduxjs/toolkit";

export const bottomSheetSlice = createSlice({
  name: "viewPortfolio",
  initialState: {
    isBottomSheetOpen: false,
  },
  reducers: {
    handleOnChange: (state) => {
      state.isBottomSheetOpen = !state.isBottomSheetOpen;
    },
    openBottomSheet: (state) => {
      state.isBottomSheetOpen = true;
    },
    closeBottomSheet: (state) => {
      state.isBottomSheetOpen = false;
    },
  },
});

export const { handleOnChange, openBottomSheet, closeBottomSheet } =
  bottomSheetSlice.actions;
export default bottomSheetSlice.reducer;
