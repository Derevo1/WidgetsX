import { configureStore } from "@reduxjs/toolkit";
import { userAppsReducer } from "./user-applications/user-applications.slice";

export const store = configureStore({
  reducer: {
    userApps: userAppsReducer
  }
})