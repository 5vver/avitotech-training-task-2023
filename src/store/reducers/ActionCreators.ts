import axios from "axios";
import { IGame } from "../../types/IGame.ts";
import { createAsyncThunk } from "@reduxjs/toolkit";

const options = {
  method: "GET",
  url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
  params: {
    category: "anime",
  },
  headers: {
    "X-RapidAPI-Key": "a0abc65a3amshc41ebf89321094dp1d0cdajsn53a4b0b37ab6",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

export const fetchGames = createAsyncThunk(
  "games/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.request<IGame[]>(options);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Something went wrong :o");
    }
  },
);
