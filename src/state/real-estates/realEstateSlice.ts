import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IRealEstate } from "../../types";
import { errorMessage } from "../../lib/utils";

import realEstateService from "./realEstateService";

interface RealEstatesState {
  items: IRealEstate[];
  isLoading: boolean;
}

const initialState: RealEstatesState = {
  items: [],
  isLoading: false,
};

export const getRealEstates = createAsyncThunk(
  "realEstates/get",
  async (_, thunkAPI) => {
    try {
      return await realEstateService.getRealEstates();
    } catch (error) {
      const message = errorMessage(error);

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const realEstateSlice = createSlice({
  name: "realEstates",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRealEstates.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRealEstates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getRealEstates.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { reset } = realEstateSlice.actions;
export default realEstateSlice.reducer;
