const { gql } = require("apollo-server-express");

const cheapestBid = gql`
  type CheapestBid {
    btcAmount: Float
    bidAmount: Float
    exchange: String
  }
`;

exports.cheapestBid = cheapestBid;
