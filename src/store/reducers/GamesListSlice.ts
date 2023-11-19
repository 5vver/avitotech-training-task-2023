import { IGame } from "@CustomTypes/IGame.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchFilterGames, fetchGame, fetchGames } from "./ActionCreators.ts";
import {
  isFulfilledAction,
  isPendingAction,
  isRejectedAction,
} from "../utils/builderMatchers.ts";

type GameState = {
  current: IGame | null;
  games: IGame[];
  isLoading: boolean;
  error: string;
};

const initialState: GameState = {
  current: null,
  games: [],
  isLoading: false,
  error: "",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    /** Reset current selected game */
    invalidateCurrent: (state) => {
      state.current = null;
    },
  },
  extraReducers: (builder) => {
    builder
      /* Fetch all games actionCreator **/
      .addCase(
        fetchGames.fulfilled,
        (state, action: PayloadAction<IGame[]>) => {
          state.isLoading = false;
          state.error = "";
          state.games = action.payload;
        },
      )
      /* Fetch one game actionCreator **/
      .addCase(fetchGame.fulfilled, (state, action: PayloadAction<IGame>) => {
        state.isLoading = false;
        state.error = "";
        state.current = action.payload;
      })
      /* Fetch filtered games actionCreator **/
      .addCase(
        fetchFilterGames.fulfilled,
        (state, action: PayloadAction<IGame[]>) => {
          state.isLoading = false;
          state.error = "";
          state.games = action.payload;
        },
      )
      /* Game builder matchers **/
      .addMatcher(isPendingAction("game"), (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addMatcher(isRejectedAction("game"), (state, action) => {
        console.error("rejected");
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isFulfilledAction("game"), (state) => {
        state.isLoading = false;
        state.error = "";
      });
  },
});

export const { invalidateCurrent } = gameSlice.actions;
export default gameSlice.reducer;
