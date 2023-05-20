import { IInstagramIntegration, initialInstagramIntegrationState as initialState } from './instagram-integration.state'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const instagramIntegrationSlice = createSlice({
  name: 'instagram-integration',
  initialState,
  reducers: {
    updateIntegrationState: (state, action: PayloadAction<Partial<IInstagramIntegration>>) => ({...state, ...action.payload})
  }
})

export const { updateIntegrationState } = instagramIntegrationSlice.actions
export const instagramIntegrationReducer = instagramIntegrationSlice.reducer
export default instagramIntegrationSlice