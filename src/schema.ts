export const typeDefs = `#graphql
    type Game {
        id: ID!,
        title: String!,
        platform: [String!]!,
        reviews: [Review!]
    }
    
    type Review {
        id: ID!,
        rating: Int!,
        content: String!
        game: Game!,
        author: Author!
    }

    type Author {
        id: ID!,
        name: String!,
        verified: Boolean!,
        reviews: [Review!]
    }

    type Query {
        games: [Game],
        reviews: [Review],
        authors: [Author],
        review(id: ID!): Review,
        game(id: ID!): Game,
        author(id: ID!): Author
    }

    type Mutation {
        deleteGame(id: ID!): [Game],
        addGame(game: addGameInput!): Game,
        updateGame(id: ID!, game: EditGameInput!): Game
    }
    input EditGameInput {
        title: String,
        platform: [String!]
    }
    input addGameInput {
        id: ID!,
        title: String!,
        platform: [String!]!
    }
`;
