import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type TodoData = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export const todoApiService = createApi({
  reducerPath: "todoApiService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getTodoList: builder.query<TodoData, string>({
      query: (id) => `todos/${id}`,
    }),
  }),
});

export const { useGetTodoListQuery } = todoApiService;
