require('dotenv').config();
import { ApolloServer } from 'apollo-server';
import {typeDefs, resolvers} from './schema';

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = process.env.PORT;
// The `listen` method launches a web server.
server.listen(PORT).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
