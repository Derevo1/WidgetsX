import { store } from "src/state/store";

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch