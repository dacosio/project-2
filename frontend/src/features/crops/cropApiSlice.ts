import { apiSlice } from "app/api/apiSlice";
import { METHOD } from "const/methods";
import { TAG_TYPE } from "const/tags";
import { Crop } from "types/store/CropState";

export const cropApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlantedCrops: builder.query<any[], void | any>({
      query: ({ isPlanted }: { isPlanted?: boolean }) => ({
        url: "/api/crops",
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

export const { useGetPlantedCropsQuery } = cropApiSlice;
