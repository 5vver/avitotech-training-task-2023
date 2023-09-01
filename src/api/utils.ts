import { IApiError } from "../types/IApi.ts";
import axios from "axios";

const RAPID_API_URL = process.env.REACT_APP_RAPID_API_URL;

export const API = axios.create({
  baseURL: RAPID_API_URL,
});

export const handleApiError = async <T>(error: IApiError<T>) => {
  try {
    const errorMessage =
      error.response?.data?.message || "An unexpected error occurred.";
    const data = null;
    return { error: errorMessage, data };
  } catch (err) {
    throw new Error("An unexpected error occurred.");
  }
};
