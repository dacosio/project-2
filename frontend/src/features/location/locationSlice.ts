import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { LocationProps } from "../../types/store/LocationState";

const initialState: LocationProps = {
  address: "",
  city: "",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    storeAddress: (state, action) => {
      state.address = action.payload;
    },
    storeCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const { storeAddress, storeCity } = locationSlice.actions;

export default locationSlice.reducer;

export const selectAddress = (state: RootState) => state.location.address;
export const selectCity = (state: RootState) => state.location.city;
