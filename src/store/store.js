import { configureStore } from "@reduxjs/toolkit";
import viewPortfolioReducer from "./Portfolio/view";
export const store = configureStore({
  reducer: {
    viewPortfolio: viewPortfolioReducer,
  },
});
