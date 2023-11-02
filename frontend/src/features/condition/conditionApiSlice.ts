import { apiSlice } from "../../app/api/apiSlice";
import { METHOD } from "../../const/methods";
import { TAG_TYPE } from "../../const/tags";

export const conditionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    predictCrop: builder.mutation({
      query: ({
        city,
        month,
        N,
        P,
        K,
        ph,
      }: {
        city: string;
        month: string;
        N: string | null;
        P: string | null;
        K: string | null;
        ph: string | null;
      }) => ({
        url: "/api/predict-crop",
        method: METHOD.POST,
        body: {
          city,
          month,
          N,
          P,
          K,
          ph,
        },
      }),
      invalidatesTags: [{ type: TAG_TYPE.PREDICT, id: "LIST" }],
    }),
    predictYield: builder.mutation({
      query: ({ city, cropName }) => ({
        url: "/api/predict-yield",
        method: METHOD.POST,
        body: { city, cropName },
      }),
      invalidatesTags: [{ type: TAG_TYPE.YIELD, id: "LIST" }],
    }),
  }),
});

export const { usePredictCropMutation, usePredictYieldMutation } =
  conditionApiSlice;
