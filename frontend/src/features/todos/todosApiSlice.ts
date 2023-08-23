import { apiSlice } from "app/api/apiSlice";
import providesList from "utils/providesList";
import { TAG_TYPE } from "const/tags";
import { GetTodosPayload } from "types/store/TodoState";
import { METHOD } from "const/methods";

export const todosApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<any[], void | any>({
      query: () => "/api/todos",
      providesTags: (result) => {
        if (result) {
          return [
            ...result.map(({ _id }: { _id: string | number }) => ({
              type: TAG_TYPE.TODO,
              id: _id,
            })),
            { type: TAG_TYPE.TODO, id: "LIST" },
          ];
        } else {
          return [{ type: TAG_TYPE.TODO, id: "LIST" }];
        }
      },
    }),
    addTodo: builder.mutation({
      query: ({ text, title }) => ({
        url: `api/todos`,
        method: METHOD.POST,
        body: { text, title },
      }),
      invalidatesTags: [{ type: TAG_TYPE.TODO, id: "LIST" }],
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `api/todos`,
        method: METHOD.DELETE,
        body: { id },
      }),
      invalidatesTags: [{ type: TAG_TYPE.TODO, id: "LIST" }],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation } =
  todosApiSlice;
