import { configureStore } from "@reduxjs/toolkit";
import { userAppsReducer } from "./user-applications/user-applications.slice";
import { appLayoutReducer } from "./app-layout/app-layout.slice";
import { instagramFeedReducer } from "./instagram-feed/instagram-feed.slice";

export const store = configureStore({
  reducer: {
    userApps: userAppsReducer,
    appLayout: appLayoutReducer,
    instagramFeed: instagramFeedReducer
  }
})