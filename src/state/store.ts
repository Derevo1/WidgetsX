import { configureStore } from "@reduxjs/toolkit";
import { userAppsReducer } from "./user-applications/user-applications.slice";
import { appLayoutReducer } from "./app-layout/app-layout.slice";
import { instagramFeedReducer } from "./instagram-feed/instagram-feed.slice";
import { instagramIntegrationReducer } from "./instagram-integration/instagram-integration.slice";
import { createStateSyncMiddleware } from "redux-state-sync";

export const store = configureStore({
  reducer: {
    userApps: userAppsReducer,
    appLayout: appLayoutReducer,
    instagramFeed: instagramFeedReducer,
    instagramIntegration: instagramIntegrationReducer
  },
  middleware: [createStateSyncMiddleware()]
})