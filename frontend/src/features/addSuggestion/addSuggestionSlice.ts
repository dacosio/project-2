import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { AddSuggestion } from "types/store/AddSuggestion";

const initialState: AddSuggestion = {
  location: "",
  month: "",
  day: "",
};

const addSuggestionSlice = createSlice({
  name: "addSuggestion",
  initialState,
  reducers: {
    storeLocation: (state, action) => {
      state.location = action.payload;
    },
    storeMonth: (state, action) => {
      state.month = action.payload;
    },
    storeDay: (state, action) => {
      state.day = action.payload;
    },
  },
});

export const { storeLocation, storeMonth, storeDay } =
  addSuggestionSlice.actions;

export default addSuggestionSlice.reducer;

export const selectLocation = (state: RootState) =>
  state.addSuggestion.location;
export const selectMonth = (state: RootState) => state.addSuggestion.month;
export const selectDay = (state: RootState) => state.addSuggestion.day;
