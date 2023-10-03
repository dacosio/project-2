import { apiSlice } from "app/api/apiSlice";
import { TAG_TYPE } from "const/tags";

export const cardApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCardDetails: builder.query<any[], void | any>({
            query: () => "/api/card",
            providesTags: (result) => {
                console.log(result)
                if (Array.isArray(result)) {
                    return [
                        ...result.map(({ _id }: { _id: string | number }) => ({
                            type: TAG_TYPE.TESTPAGE,
                            id: _id,
                        })),
                        { type: TAG_TYPE.TESTPAGE, id: "LIST" },
                    ];
                } else {
                    return [{ type: TAG_TYPE.TESTPAGE, id: "LIST" }];
                }
            },
        }),
    }),
});

export const { useGetCardDetailsQuery } = cardApiSlice;