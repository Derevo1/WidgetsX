import { initalAppLayout as initialState } from "./app-layout.state";
import { createSlice } from "@reduxjs/toolkit";

const appLayoutSlice = createSlice({
  name: 'app-layout',
  initialState,
  reducers: {
    changeAppLayout: (state, action) => ({...state, ...action.payload})
  }
})

export const { changeAppLayout } = appLayoutSlice.actions
export const appLayoutReducer = appLayoutSlice.reducer
export default appLayoutSlice