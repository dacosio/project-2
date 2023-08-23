import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { TokenProps } from "types/store/AuthState";

const initialState: TokenProps = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      console.log(accessToken, "<---- from setCredentials authSlice");
      state.token = accessToken;
    },
    logOut: (state) => {
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.auth.token;
