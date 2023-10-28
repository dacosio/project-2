import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authReducer from "../features/auth/authSlice";
import sidebarReducer from "../features/sidebar/sidebarSlice";
import authModalReducer from "../features/authModal/authModalSlice";
import addSuggestionReducer from "../features/addSuggestion/addSuggestionSlice";
import locationReducer from "../features/location/locationSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    sidebar: sidebarReducer,
    authModal: authModalReducer,
    addSuggestion: addSuggestionReducer,
    location: locationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: false,
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
