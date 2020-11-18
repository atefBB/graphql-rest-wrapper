import { GraphQLServer } from "graphql-yoga";
import fetch from "node-fetch";

const baseURL = `https://my-json-server.typicode.com/atefBB/test-api/`;

const resolvers: any = {
  Query: {
    users: () => {
      return fetch(`${baseURL}/users`).then((res: any) => res.json());
    },
    user: (parent: any, args: { id: string }) => {
      const { id } = args;
      return fetch(`${baseURL}/users/${id}`).then((res: any) => res.json());
    },
    commands: () => {
      return fetch(`${baseURL}/commands`).then((res: any) => res.json());
    },
    command: (parent: any, args: { id: string }) => {
      const { id } = args;
      return fetch(`${baseURL}/commands/${id}`).then((res: any) => res.json());
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
