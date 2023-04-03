import { initalUserApps as initialState } from "./user-applications.state";
import { createSlice } from "@reduxjs/toolkit";

const userAppsSlice = createSlice({
  name: 'user-apps',
  initialState,
  reducers: {
    addNewApp: (state, action) => [...state, action.payload]
  }
})

export const { addNewApp } = userAppsSlice.actions
export const userAppsReducer = userAppsSlice.reducer
export default userAppsSlice