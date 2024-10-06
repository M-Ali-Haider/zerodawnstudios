import { createSlice } from "@reduxjs/toolkit";

export const viewPortfolioSlice = createSlice({
  name: "viewPortfolio",
  initialState: {
    view: {
      title: "Laptop",
    },
  },
  reducers: {
    handleViewChange: (state, action) => {
      state.view = action.payload;
    },
  },
});

export const { handleViewChange } = viewPortfolioSlice.actions;
export default viewPortfolioSlice.reducer;
