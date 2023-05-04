import { configureStore } from "@reduxjs/toolkit";
import { userAppsReducer } from "./user-applications/user-applications.slice";
import { appLayoutReducer } from "./app-layout/app-layout.slice";

export const store = configureStore({
  reducer: {
    userApps: userAppsReducer,
    appLayout: appLayoutReducer
  }
})