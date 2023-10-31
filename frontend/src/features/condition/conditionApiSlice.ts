import { apiSlice } from "../../app/api/apiSlice";
import { METHOD } from "../../const/methods";
import { TAG_TYPE } from "../../const/tags";

export const conditionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPredictCrop: builder.mutation({
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
        N?: string;
        P?: string;
        K?: string;
        ph?: string;
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

export const { useGetPredictCropMutation, usePredictYieldMutation } =
  conditionApiSlice;
