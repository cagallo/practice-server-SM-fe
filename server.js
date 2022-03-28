const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas/index');
const cors = require("cors");
const app = express();



app.use(cors());
app.use(express.json());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');