import { Game } from "@CustomTypes/Game.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchFilterGames, fetchGame, fetchGames } from "./ActionCreators.ts";
import {
  isFulfilledAction,
  isPendingAction,
  isRejectedAction,
} from "../utils/builderMatchers.ts";

type GameState = {
  games: Game[];
  isLoading: boolean;
  error: string;
};

const initialState: GameState = {
  games: [],
  isLoading: false,
  error: "",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /* Fetch all games actionCreator **/
      .addCase(
        fetchGames.fulfilled,
        (state, action: PayloadAction<Game[]>) => {
          state.isLoading = false;
          state.error = "";
          state.games = action.payload;
        },
      )
      /* Fetch one game actionCreator **/
      .addCase(fetchGame.fulfilled, (state, action: PayloadAction<Game>) => {
        state.isLoading = false;
        state.error = "";
        state.games = [action.payload];
      })
      /* Fetch filtered games actionCreator **/
      .addCase(
        fetchFilterGames.fulfilled,
        (state, action: PayloadAction<Game[]>) => {
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
        console.log("rejected");
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isFulfilledAction("game"), (state) => {
        state.isLoading = false;
        state.error = "";
      });
  },
});

export default gameSlice.reducer;
