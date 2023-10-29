import { apiSlice } from "app/api/apiSlice";
import { METHOD } from "const/methods";
import { TAG_TYPE } from "const/tags";
const url = "api/crops";

export const cropApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlantedCrops: builder.query<any[], void | any>({
      query: ({ isPlanted }: { isPlanted?: boolean }) => ({
        url,
        method: METHOD.GET,
        params: {
          isPlanted,
        },
      }),
      providesTags: (result) => {
        console.log(result);
        if (result) {
          return [
            ...result.map(({ _id }: { _id: string | number }) => ({
              type: TAG_TYPE.CROP,
              id: _id,
            })),
            { type: TAG_TYPE.CROP, id: "LIST" },
          ];
        } else {
          return [{ type: TAG_TYPE.CROP, id: "LIST" }];
        }
      },
    }),
    plant: builder.mutation({
      //plantLater
      query: ({ cropId, plantNow }) => ({
        url,
        method: METHOD.POST,
        body: { cropId, plantNow },
      }),
      invalidatesTags: [{ type: TAG_TYPE.CROP, id: "LIST" }],
    }),
    plantNowFromGuide: builder.mutation({
      // id is crop id
      query: ({ id }) => ({
        url: `${url}/plant-now`,
        method: METHOD.POST,
        body: { id },
      }),
      invalidatesTags: [{ type: TAG_TYPE.CROP, id: "LIST" }],
    }),
    removeCrop: builder.mutation({
      query: ({ id }) => ({
        url,
        method: METHOD.DELETE,
        body: { id },
      }),
      invalidatesTags: [{ type: TAG_TYPE.CROP, id: "LIST" }],
    }),
  }),
});

export const {
  useGetPlantedCropsQuery,
  usePlantMutation,
  usePlantNowFromGuideMutation,
  useRemoveCropMutation,
} = cropApiSlice;
