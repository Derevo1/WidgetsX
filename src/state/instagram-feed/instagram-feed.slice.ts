import { IInstagramProfileState, initalInstagramFeedState as initialState } from "./instagram-feed.state";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const instagramFeedSlice = createSlice({
  name: 'instagram-feed',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<IInstagramProfileState>) => ({...state, ...action.payload})
  }
})

export const { updateProfile } = instagramFeedSlice.actions
export const instagramFeedReducer = instagramFeedSlice.reducer
export default instagramFeedSlice