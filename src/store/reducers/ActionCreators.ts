import { IGame } from "../../types/IGame.ts";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api/utils.ts";

const options = {
  method: "GET",
  url: `${process.env.REACT_APP_RAPID_API_URL}/games`,
  params: {
    category: "anime",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

export const fetchGames = createAsyncThunk(
  "games/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await API.request<IGame[]>(options);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Something went wrong :o");
    }
  },
);
