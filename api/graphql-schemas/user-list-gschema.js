const { makeExecutableSchema } = require('graphql-tools');
const userListQueryResolver = require('../graphql-resolvers/user-list-gresolver.js');

const typeDefs = `
    type Query {
        users: [User]
    }

    type User {
        email: String,
        firstName: String,
        lastName: String
    }
`;

const userListQuerySchema = makeExecutableSchema({ 
    typeDefs, 
    userListQueryResolver 
});

module.exports = userListQuerySchema;