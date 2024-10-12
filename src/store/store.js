import { configureStore } from "@reduxjs/toolkit";
import viewPortfolioReducer from "./Portfolio/view";
import bottomSheetReducer from "./bottomSheet";
export const store = configureStore({
  reducer: {
    viewPortfolio: viewPortfolioReducer,
    bottomSheet: bottomSheetReducer,
  },
});
