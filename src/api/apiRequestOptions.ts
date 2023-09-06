import { RequestParams } from "@src/types/Api.ts";

export const createReqOptions = (
  path: string,
  params: Partial<RequestParams> = {},
  method: string = "GET",
) => {
  return {
    method,
    url: `${import.meta.env.VITE_RAPID_API_URL}${path}`,
    params: params,
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
    },
  };
};
