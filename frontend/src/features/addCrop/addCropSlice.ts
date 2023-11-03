import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { AddCropProps } from "../../types/store/AddCropState";

const initialState: AddCropProps = {
  date: "",
  month: "",
  nitrogen: "",
  phosphorus: "",
  potassium: "",
  ph: "",
  cropId: "",
  cropName: "",
};

const addCropSlice = createSlice({
  name: "addCrop",
  initialState,
  reducers: {
    storeDate: (state, action) => {
      state.date = action.payload;
    },
    storeMonth: (state, action) => {
      state.month = action.payload;
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
    storeCropId: (state, action) => {
      state.cropId = action.payload;
    },
    storeCropName: (state, action) => {
      state.cropName = action.payload;
    },
  },
});

export const {
  storeDate,
  storeMonth,
  storeNitrogen,
  storePhosphorus,
  storePotassium,
  storePh,
  storeCropId,
  storeCropName,
} = addCropSlice.actions;

export default addCropSlice.reducer;

export const selectDate = (state: RootState) => state.addCrop.date;
export const selectMonth = (state: RootState) => state.addCrop.month;
export const selectNitrogen = (state: RootState) => state.addCrop.nitrogen;
export const selectPhosphorus = (state: RootState) => state.addCrop.phosphorus;
export const selectPotassium = (state: RootState) => state.addCrop.potassium;
export const selectPh = (state: RootState) => state.addCrop.ph;
export const selectCropId = (state: RootState) => state.addCrop.cropId;
export const selectCropName = (state: RootState) => state.addCrop.cropName;
