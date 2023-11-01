import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { SelectedCropProps } from "../../types/store/CropState";

const initialState: SelectedCropProps = {
  selectedOption: { value: "all", label: "All" },
  selectedCropId: "",
};

const cropSlice = createSlice({
  name: "crop",
  initialState,
  reducers: {
    storeSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
    storeSelectedCropId: (state, action) => {
      state.selectedCropId = action.payload;
    },
  },
});

export const { storeSelectedOption, storeSelectedCropId } = cropSlice.actions;

export default cropSlice.reducer;

export const selectSelectedOption = (state: RootState) =>
  state.crop.selectedOption;
export const selectSelectedCropId = (state: RootState) =>
  state.crop.selectedCropId;
