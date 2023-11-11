import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { ImageType } from "react-images-uploading";
import { SidebarProps } from "types/store/SidebarState";

const initialState: {
  signIn: boolean;
  signUp: boolean;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
} = {
  signIn: false,
  signUp: false,
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
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
    storeEmail: (state, action) => {
      state.email = action.payload;
    },
    storePassword: (state, action) => {
      state.password = action.payload;
    },
    storeConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    storeFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    storeLastName: (state, action) => {
      state.lastName = action.payload;
    },
  },
});

export const {
  toggleSignIn,
  toggleSignUp,
  storeEmail,
  storePassword,
  storeConfirmPassword,
  storeFirstName,
  storeLastName,
} = authModalSlice.actions;

export default authModalSlice.reducer;

export const selectSignInModal = (state: RootState) => state.authModal.signIn;
export const selectSignUpModal = (state: RootState) => state.authModal.signUp;
export const selectEmail = (state: RootState) => state.authModal.email;
export const selectPassword = (state: RootState) => state.authModal.password;
export const selectConfirmPassword = (state: RootState) =>
  state.authModal.confirmPassword;
export const selectFirstName = (state: RootState) => state.authModal.firstName;
export const selectLastName = (state: RootState) => state.authModal.lastName;
