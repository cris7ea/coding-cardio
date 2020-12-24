const { gql } = require("apollo-server-express");

const queries = gql`
  type Query {
    cheapestExchange(amount: Float!): CheapestBid!
  }
`;

exports.queries = queries;
