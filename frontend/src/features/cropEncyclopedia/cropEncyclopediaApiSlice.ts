import { TAG_TYPE } from "../../const/tags";
import { apiSlice } from "../../app/api/apiSlice";

export const cropEncyclopediaApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCropAbout: builder.query<any, string>({
      query: (id) => `/api/cropencyclopedias/${id}`,
      providesTags: (result, error, id) => [{ type: TAG_TYPE.GETCROP, id: id }],
    }),
    getCropAboutAll: builder.query<any[], void | any>({
      query: () => "/api/cropencyclopedias",
      providesTags: (result) => {
        if (result) {
          return [
            ...result.map(({ _id }: { _id: string | number }) => ({
              type: TAG_TYPE.GETCROP,
              id: _id,
            })),
            { type: TAG_TYPE.GETCROP, id: "LIST" },
          ];
        } else {
          return [{ type: TAG_TYPE.GETCROP, id: "LIST" }];
        }
      },
    }),
  }),
});

export const { useGetCropAboutQuery, useGetCropAboutAllQuery } =
  cropEncyclopediaApiSlice;
