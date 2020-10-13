const { buildSchema } = require('graphql');
const schema = require('../../../Maxmillian Course (Chapter 12 setting up from begining)/Graph QL API/graphql/schema');

module.exports =  buildSchema{`
  type RootMutation{

  }
  
  type RootQuery {

  }

  schema : {
    query : RootQuery,
    mutation : RootMutation
  }
`}