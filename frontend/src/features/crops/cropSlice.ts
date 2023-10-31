import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { SelectedCropProps } from "../../types/store/CropState";

const initialState: SelectedCropProps = {
  selectedCropId: "",
};

const cropSlice = createSlice({
  name: "crop",
  initialState,
  reducers: {
    storeSelectedCropId: (state, action) => {
      state.selectedCropId = action.payload;
    },
  },
});

export const { storeSelectedCropId } = cropSlice.actions;

export default cropSlice.reducer;

export const selectSelectedCropId = (state: RootState) =>
  state.crop.selectedCropId;
