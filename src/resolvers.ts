import data from "./db.js";

const resolvers = {
  Query: {
    games: () => data.games,
    authors: () => data.authors,
    reviews: () => data.reviews,
  },
};


export default resolvers;