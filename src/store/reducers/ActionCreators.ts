import { IGame } from "@CustomTypes/IGame.ts";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "@api/utils.ts";
import { createReqOptions } from "@api/apiRequestOptions.ts";
import { RequestParams } from "@CustomTypes/IApi.ts";
import { AxiosError } from "axios";

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async (reqParams: Partial<RequestParams> = {}, thunkAPI) => {
    try {
      const { data } = await API.request<IGame[]>(
        createReqOptions("games", reqParams),
      );
      return data;
    } catch (e: unknown) {
      if (e instanceof AxiosError)
        return thunkAPI.rejectWithValue(
          `API request error has occurred with the message: ${e.message}`,
        );
      return thunkAPI.rejectWithValue(e);
    }
  },
);
export const fetchGame = createAsyncThunk(
  "games/fetchGame",
  async (reqParams: Partial<RequestParams> = {}, thunkAPI) => {
    try {
      const { data } = await API.request<IGame>(
        createReqOptions("game", reqParams),
      );
      return data;
    } catch (e: unknown) {
      if (e instanceof AxiosError)
        return thunkAPI.rejectWithValue(
          `API request error has occurred with the message: ${e.message}`,
        );
      return thunkAPI.rejectWithValue(e);
    }
  },
);
export const fetchFilterGames = createAsyncThunk(
  "games/fetchGamesByMultipleTags",
  async (reqParams: Partial<RequestParams> = {}, thunkAPI) => {
    try {
      const { data } = await API.request<IGame[]>(
        createReqOptions("filter", reqParams),
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
