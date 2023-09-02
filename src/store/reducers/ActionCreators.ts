import { IGame } from "../../types/IGame.ts";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api/utils.ts";
import { createReqOptions } from "../../api/apiRequestOptions.ts";

export const fetchGames = createAsyncThunk(
  "games/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await API.request<IGame[]>(createReqOptions("games"));
      return data;
    } catch (e: unknown) {
      if (e instanceof Error)
        return thunkAPI.rejectWithValue(
          `API request error has occurred with the message: ${e.message}`,
        );
      return thunkAPI.rejectWithValue(e);
    }
  },
);
export const fetchGameByID = createAsyncThunk(
  "games/fetchGame",
  async (id: string = "", thunkAPI) => {
    try {
      const { data } = await API.request<IGame>(
        createReqOptions("game", { id }),
      );
      return data;
    } catch (e: unknown) {
      if (e instanceof Error)
        return thunkAPI.rejectWithValue(
          `API request error has occurred with the message: ${e.message}`,
        );
      return thunkAPI.rejectWithValue(e);
    }
  },
);
