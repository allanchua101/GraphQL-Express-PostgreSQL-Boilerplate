const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bodyParser = require('body-parser');
const userListQuerySchema = require('../graphql-schemas/user-list-gschema.js');

const router = express.Router();

router.post('/list', graphqlExpress({
  schema: userListQuerySchema
}));

router.get('/graphiql', graphiqlExpress({ endpointURL: '/users/list' }));

module.exports = router;
