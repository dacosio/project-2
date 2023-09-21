import { apiSlice } from "app/api/apiSlice";
import { TAG_TYPE } from "const/tags";
import { METHOD } from "const/methods";

export const yuhwansApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllYuhwans: builder.query<any[], void | any>({
      query: () => "/api/yuhwans",
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
  }),
});

export const { useGetAllYuhwansQuery } = yuhwansApiSlice;
