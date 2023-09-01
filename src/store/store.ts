import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducers/GamesListSlice.ts";

export const store = configureStore({
  reducer: {
    gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
