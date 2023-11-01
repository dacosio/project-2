import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { SidebarProps } from "types/store/SidebarState";

const initialState: { signIn: boolean; signUp: boolean; email: string } = {
  signIn: false,
  signUp: false,
  email: "",
};

const authModalSlice = createSlice({
  name: "authModal",
  initialState,
  reducers: {
    toggleSignIn: (state, action) => {
      state.signIn = action.payload;
    },
    toggleSignUp: (state, action) => {
      state.signUp = action.payload;
    },
    forwardEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { toggleSignIn, toggleSignUp, forwardEmail } =
  authModalSlice.actions;

export default authModalSlice.reducer;

export const selectSignInModal = (state: RootState) => state.authModal.signIn;
export const selectSignUpModal = (state: RootState) => state.authModal.signUp;
export const selectForwardEmail = (state: RootState) => state.authModal.email;
