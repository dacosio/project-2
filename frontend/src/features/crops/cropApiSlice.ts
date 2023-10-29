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
      //plantLater / plantnow if in crop guide page
      query: ({ cropId, plantNow }) => ({
        url,
        method: METHOD.POST,
        body: { cropId, plantNow },
      }),
      invalidatesTags: [{ type: TAG_TYPE.CROP, id: "LIST" }],
    }),
    plantNow: builder.mutation({
      //plantnow when coming from your crop
      query: ({ id }) => ({
        url: "api/plant-now",
        method: METHOD.PUT,
        body: { id },
      }),
      invalidatesTags: [{ type: TAG_TYPE.CROP, id: "LIST" }],
    }),
    favorite: builder.mutation({
      //plantnow when coming from your crop
      query: ({ id, isFavorite }) => ({
        url,
        method: METHOD.PUT,
        body: { id, isFavorite },
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
    addCrop: builder.mutation({
      query: ({
        cropId,
        isPlanted,
      }: {
        cropId: string;
        isPlanted: boolean;
      }) => ({
        url: "/api/crops",
        method: METHOD.POST,
        params: {
          cropId,
          isPlanted,
        },
      }),
      invalidatesTags: [{ type: TAG_TYPE.CROP, id: "LIST" }],
    }),
  }),
});

export const {
  useGetPlantedCropsQuery,
  usePlantMutation,
  useRemoveCropMutation,
  usePlantNowMutation,
  useFavoriteMutation,
} = cropApiSlice;
