import { apiSlice } from "./../../app/api/apiSlice";
import { TAG_TYPE } from "./../../const/tags";

export const searchApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSearchDetails: builder.query<any[], void | any>({
            query: () => "/api/search",
            providesTags: (result) => {
                console.log('here ' + result);
                if (Array.isArray(result)) {
                    return result.map(({ _id }: { _id: string | number }) => ({
                        type: TAG_TYPE.SEARCH,
                        id: _id,
                    }));
                } else {
                    return [{ type: TAG_TYPE.SEARCH, id: "LIST" }];
                }
            },
        }),
    }),
});

export const { useGetSearchDetailsQuery } = searchApiSlice;
