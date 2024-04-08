import data from "./db.js";

const resolvers = {
  Query: {
    games: () => data.games,
    authors: () => data.authors,
    reviews: () => data.reviews,
    review: (_, { id }) => data.reviews.find((review) => review.id === id),
    game: (_, { id }) => data.games.find((game) => game.id === id),
    author: (_, { id }) => data.authors.find((author) => author.id === id),
  },
};


export default resolvers;