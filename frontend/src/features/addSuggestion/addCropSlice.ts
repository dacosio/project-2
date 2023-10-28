import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { AddSuggestion as AddCrop } from "types/store/AddCrop";
import { Crop } from "types/store/CropState";

const initialState: AddCrop = {
  date: "",
  nitrogen: "",
  phosphorus: "",
  potassium: "",
  ph: "",
  name: "",
  crop: undefined,
};

const addCropSlice = createSlice({
  name: "addCrop",
  initialState,
  reducers: {
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
    storeName: (state, action) => {
      state.name = action.payload;
    },
    storeCrop: (state, action) => {
      state.crop = action.payload;
    },
  },
});

export const {
  storeDate,
  storeNitrogen,
  storePhosphorus,
  storePotassium,
  storePh,
  storeName,
  storeCrop,
} = addCropSlice.actions;

export default addCropSlice.reducer;

export const selectDate = (state: RootState) => state.addCrop.date;
export const selectNitrogen = (state: RootState) => state.addCrop.nitrogen;
export const selectPhosphorus = (state: RootState) => state.addCrop.phosphorus;
export const selectPotassium = (state: RootState) => state.addCrop.potassium;
export const selectPh = (state: RootState) => state.addCrop.ph;
export const selectName = (state: RootState) => state.addCrop.name;
export const selectCrop = (state: RootState) => state.addCrop.crop;