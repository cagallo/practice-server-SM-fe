const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const DonorType = new GraphQLObjectType({
  name: "Donor",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    bio: { type: GraphQLString },
    location: {type: GraphQLString}
  }),
});

module.exports = DonorType;