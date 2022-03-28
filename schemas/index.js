const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;
const userData = require("../mock-data.json");

const DonorType = require("./TypeDef/DonorType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    queryUsers: {
      type: new GraphQLList(DonorType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return userData;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: DonorType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        bio: { type: GraphQLString },
        location: { type: GraphQLString }
      },
      resolve(parent, args) {
        userData.push({
          id: userData.length + 1,
          name: args.name,
          email: args.email,
          phone: args.phone,
          bio: args.bio,
          location: args.location
        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
