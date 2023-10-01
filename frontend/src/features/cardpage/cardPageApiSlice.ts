import { apiSlice } from "app/api/apiSlice";
import { TAG_TYPE } from "const/tags";


export const cardPageApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
       getCard: builder.query<any[], void | any>({
      query: () => "/api/card",
      providesTags: (result) => {
        if (result) {
          return [
            ...result.map(({ _id }: { _id: string | number }) => ({
              type: TAG_TYPE.CARDPAGE,
              id: _id,
            })),
            { type: TAG_TYPE.CARDPAGE, id: "LIST" },
          ];
        } else {
          return [{ type: TAG_TYPE.CARDPAGE, id: "LIST" }];
        }
      },
    }),
  }),
});

export const {
  useGetCardQuery,
} =  cardPageApiSlice;