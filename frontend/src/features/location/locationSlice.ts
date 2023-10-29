import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Location } from "types/store/Location";

const initialState: Location = {
  location: undefined,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    storeLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { storeLocation } = locationSlice.actions;

export default locationSlice.reducer;

export const selectLocation = (state: RootState) => state.location.location;
