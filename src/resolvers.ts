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
  Game: {
    reviews: (game) =>
      data.reviews.filter((review) => review.game_id === game.id),
  },
  Review: {
    game: (review) => data.games.find((game) => game.id === review.game_id),
    author: (review) =>
      data.authors.find((author) => author.id === review.author_id),
  },
  Author: {
    reviews: (author) =>
      data.reviews.filter((review) => review.author_id === author.id),
  },
  Mutation: {
    deleteGame: (_, { id }) => {
      const gameIndex = data.games.findIndex((game) => game.id === id);
      if (gameIndex === -1) {
        throw new Error("Game not found");
      }
      data.games.splice(gameIndex, 1);
      return data.games;
    },
    addGame: (_, { args }) => {
      data.games.push({
        ...args.game,
        id: String(data.games.length + 1),
      });
      return args.game;
    },
    updateGame: (_, { id, args }) => {
      const gameIndex = data.games.findIndex((game) => game.id === id);
      if (gameIndex === -1) {
        throw new Error("Game not found");
      }
      data.games[gameIndex] = {
        ...args.game,
        id,
      };
      return data.games[gameIndex];
    }
  },
};

export default resolvers;
