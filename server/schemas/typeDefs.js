const { gql } = require('apollo-server-express');

const typeDefs = gql `

  type Guide {
    _id: ID
    name: String
    address: String
    photo: String
  }

  type User {
    _id: ID
    username: String
    email: String
    phone: String
    guides: [Guide]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, phone: String! password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;