import { configureStore } from "@reduxjs/toolkit";
import realEstateReducer from "./real-estates/realEstateSlice";

export const store = configureStore({
  reducer: {
    realEstates: realEstateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
