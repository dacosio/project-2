import { apiSlice } from "app/api/apiSlice";
import { TAG_TYPE } from "const/tags";
import { METHOD } from "const/methods";

export const yuhwansApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addYuhwan: builder.mutation({
      query: ({ title, subtitle, description }) => ({
        url: `api/yuhwans`,
        method: METHOD.POST,
        body: { title, subtitle, description },
      }),
      invalidatesTags: [{ type: TAG_TYPE.YUHWAN, id: "LIST" }],
    }),
    getAllYuhwans: builder.query<any[], void | any>({
      query: () => "/api/yuhwans",
      providesTags: (result) => {
        if (result) {
          return [
            ...result.map(({ _id }: { _id: string | number }) => ({
              type: TAG_TYPE.YUHWAN,
              id: _id,
            })),
            { type: TAG_TYPE.YUHWAN, id: "LIST" },
          ];
        } else {
          return [{ type: TAG_TYPE.YUHWAN, id: "LIST" }];
        }
      },
    }),
    updateYuhwan: builder.mutation({
      query: ({ id, title, subtitle, description }) => ({
        url: `api/yuhwans`,
        method: METHOD.PUT,
        body: { id, title, subtitle, description },
      }),
      invalidatesTags: [{ type: TAG_TYPE.YUHWAN, id: "LIST" }],
    }),
    deleteYuhwan: builder.mutation({
      query: ({ id }) => ({
        url: `api/yuhwans`,
        method: METHOD.DELETE,
        body: { id },
      }),
      invalidatesTags: [{ type: TAG_TYPE.YUHWAN, id: "LIST" }],
    }),
  }),
});

export const {
  useAddYuhwanMutation,
  useGetAllYuhwansQuery,
  useUpdateYuhwanMutation,
  useDeleteYuhwanMutation,
} = yuhwansApiSlice;
