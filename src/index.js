const { GraphQLServer } = require("graphql-yoga");
const fetch = require("node-fetch");

const baseURL = `https://my-json-server.typicode.com/atefBB/test-api/`;

const resolvers = {
  Query: {
    users: () => {
      return fetch(`${baseURL}/users`).then(res => res.json());
    },
    user: (parent, args) => {
      const { id } = args;
      return fetch(`${baseURL}/users/${id}`).then(res => res.json());
    },
  },
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
