const { ApolloServer } = require('apollo-server');
const typeDefs = require("./schema");
const Query = require("./resolver/Query");
const Animal = require("./resolver/Animal")
const Category = require("./resolver/Category");
const Mutation = require("./resolver/Mutation");
const { mainCards, animals, categories } = require("./db");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Animal,
    Mutation,
    Category
  },
  context: {
    mainCards,
    animals,
    categories
  }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});