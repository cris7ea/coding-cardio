const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const queries = require("./resolvers/queries");
const typeDefs = require("./type-defs");

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: queries,
  },
});
const app = express();

server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
