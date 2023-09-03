import { AxiosError } from "axios";

interface IErrorBase<T> {
  error: Error | AxiosError<T>;
  type: "axios-error" | "stock-error";
}
interface IAxiosError<T> extends IErrorBase<T> {
  error: AxiosError<T>;
  type: "axios-error";
}
interface IStockError<T> extends IErrorBase<T> {
  error: Error;
  type: "stock-error";
}
export type AxiosErrorResponse<T> = {
  data: {
    message: T;
  };
};
export type AxiosResponse<T> = {
  data: T;
};
export interface IApiError<T> extends IErrorBase<T> {
  response: AxiosErrorResponse<T>;
}
export type RequestParams = {
  tag: string;
  id: string;
  platform: Platform;
  category: Category;
  sortBy: SortBy;
};
type Category = "3d" | "mmorpg" | "fantasy" | "pvp" | "shooter" | "anime";
type Platform = "pc" | "browser";
type SortBy = "release-date" | "alphabetical";

export type payloadCreatorParams = {
  id: string;
};
