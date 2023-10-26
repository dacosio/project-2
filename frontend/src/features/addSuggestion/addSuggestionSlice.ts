import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { AddSuggestion } from "types/store/AddSuggestion";

const initialState: AddSuggestion = {
  location: "",
};

const addSuggestionSlice = createSlice({
  name: "addSuggestion",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = addSuggestionSlice.actions;

export default addSuggestionSlice.reducer;

export const selectLocation = (state: RootState) =>
  state.addSuggestion.location;
