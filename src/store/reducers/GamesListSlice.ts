import { IGame } from "../../types/IGame.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGameByID, fetchGames } from "./ActionCreators.ts";

interface GameState {
  games: IGame[];
  isLoading: boolean;
  error: string;
}

const initialState: GameState = {
  games: [],
  isLoading: false,
  error: "",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGames.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchGames.fulfilled.type]: (state, action: PayloadAction<IGame[]>) => {
      state.isLoading = false;
      state.error = "";
      state.games = action.payload;
    },
    [fetchGames.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchGameByID.fulfilled.type]: (state, action: PayloadAction<IGame>) => {
      state.isLoading = false;
      state.games.push(action.payload);
    },
  },
});

export default gameSlice.reducer;
