require('dotenv').config();
import express from 'express';
import logger from 'morgan';
import { ApolloServer } from 'apollo-server-express';
import {typeDefs, resolvers} from './schema';
import { getUser } from "./users/users.utils";

const PORT = process.env.PORT;
const apollo = new ApolloServer({
    resolvers,
    typeDefs,
    playground: true,
    introspection: true,
    context: async ({req}) => {
        return{
            loggedInUser: await getUser(req.headers.token),
        };
    },
});

const app = express();
// 위치가 중요함..
app.use(logger('tiny'));
apollo.applyMiddleware({app});
app.use("/static", express.static("uploads"));
// The `listen` method launches a web server.
app.listen({port:PORT},() => {
    console.log(`🚀  Server ready at http://localhost:${PORT}`);
});
