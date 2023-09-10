import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { SidebarProps } from "types/store/SidebarState";

const initialState: SidebarProps = {
  broken: false,
  collapse: false,
  toggle: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    sendBroken: (state, action) => {
      state.broken = action.payload;
    },
    sendCollapse: (state, action) => {
      state.collapse = action.payload;
    },
    sendToggle: (state, action) => {
      state.toggle = action.payload;
    },
  },
});

export const { sendBroken, sendCollapse, sendToggle } = sidebarSlice.actions;

export default sidebarSlice.reducer;

export const selectBroken = (state: RootState) => state.sidebar.broken;
export const selectCollapse = (state: RootState) => state.sidebar.collapse;
export const selectToggle = (state: RootState) => state.sidebar.toggle;
