import {gql} from "apollo-server";
export default gql`
    type User {
        id: Int!
        email: String!
        name: String
    }
    
    type Request {
        ok: String!
        error: String
    }
    
    extend type Query {
        seeUser(
            id: Int!
        ): User!
    }

    extend type Mutation {
        createUser(
            email: String!
            name: String
        ): User!
        
        editUser(
            id: Int!
            name: String
        ): Request!
    }
`;
