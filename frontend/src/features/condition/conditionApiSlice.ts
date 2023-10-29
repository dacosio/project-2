import { apiSlice } from "app/api/apiSlice";
import { METHOD } from "const/methods";
import { TAG_TYPE } from "const/tags";
import { Crop } from "types/store/CropState";

export const conditionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPredictCrop: builder.query<any[], void | any>({
      query: ({ city, month }: { city: string; month: string }) => ({
        url: "/api/predict-crop",
        method: METHOD.POST,
        params: {
          city,
          month,
        },
      }),
      providesTags: (result) => {
        console.log(result);
        if (result) {
          return [
            ...result.map(({ _id }: { _id: string | number }) => ({
              type: TAG_TYPE.PREDICT,
              id: _id,
            })),
            { type: TAG_TYPE.PREDICT, id: "LIST" },
          ];
        } else {
          return [{ type: TAG_TYPE.PREDICT, id: "LIST" }];
        }
      },
    }),
  }),
});

export const { useGetPredictCropQuery } = conditionApiSlice;
