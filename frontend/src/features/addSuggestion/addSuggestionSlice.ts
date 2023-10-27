import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { AddSuggestion } from "types/store/AddSuggestion";

const initialState: AddSuggestion = {
  location: "",
  date: "",
  nitrogen: "",
  phosphorus: "",
  potassium: "",
  ph: "",
};

const addSuggestionSlice = createSlice({
  name: "addSuggestion",
  initialState,
  reducers: {
    storeLocation: (state, action) => {
      state.location = action.payload;
    },
    storeDate: (state, action) => {
      state.date = action.payload;
    },
    storeNitrogen: (state, action) => {
      state.nitrogen = action.payload;
    },
    storePhosphorus: (state, action) => {
      state.phosphorus = action.payload;
    },
    storePotassium: (state, action) => {
      state.potassium = action.payload;
    },
    storePh: (state, action) => {
      state.ph = action.payload;
    },
  },
});

export const {
  storeLocation,
  storeDate,
  storeNitrogen,
  storePhosphorus,
  storePotassium,
  storePh,
} = addSuggestionSlice.actions;

export default addSuggestionSlice.reducer;

export const selectLocation = (state: RootState) =>
  state.addSuggestion.location;
export const selectDate = (state: RootState) => state.addSuggestion.date;
export const selectNitrogen = (state: RootState) =>
  state.addSuggestion.nitrogen;
export const selectPhosphorus = (state: RootState) =>
  state.addSuggestion.phosphorus;
export const selectPotassium = (state: RootState) =>
  state.addSuggestion.potassium;
export const selectPh = (state: RootState) => state.addSuggestion.ph;
