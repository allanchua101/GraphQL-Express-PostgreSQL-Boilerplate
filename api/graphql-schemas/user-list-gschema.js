const { makeExecutableSchema } = require('graphql-tools');
const userListQueryResolver = require('../graphql-resolvers/user-list-gresolver.js');

const typeDefs = `
    type Query {
        users: [User]
        hi: String
    }

    type User {
        email: String,
        firstName: String,
        lastName: String
    }
`;

const userListQuerySchema = makeExecutableSchema({ 
    typeDefs: typeDefs, 
    resolvers : userListQueryResolver
});

module.exports = userListQuerySchema;