import client from "../../client";

export default {
  Query: {
    seeCategories: (_, { lastId } ) =>
      client.category.findMany({
        take: 2,
        skip: lastId ? 1 : 0,
        ...(lastId && { cursor: { id: lastId } }),
      }),
  },
};