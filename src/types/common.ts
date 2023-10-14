import { AxiosError } from "axios";

export interface TimeStampsAndId {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export type AxiosErrorType = AxiosError<{
  message: string;
  error: string;
  statusCode: number;
}>;

export type ElementType<T extends readonly unknown[]> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never;

export interface Pagination {
  page: number;
  limit: number;
  total_count: number;
  total_pages: number;
}
