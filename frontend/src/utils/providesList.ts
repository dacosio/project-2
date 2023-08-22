const providesList = <R extends { id: string | number }[], T extends string>(
  resultsWithIds: R | undefined,
  tagType: T,
  idArg: T
) =>
  resultsWithIds
    ? [
        { type: tagType, id: idArg },
        ...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
      ]
    : [{ type: tagType, id: idArg }];

export default providesList;
