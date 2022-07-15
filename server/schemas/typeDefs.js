const { gql } = require('apollo-server-express');

const typeDefs = gql `

  type Category {
    _id: ID
    name: String
    description: String
  }

  type Subscription {
    _id: ID
    name: String
    propertiesAllowed: Int
    startDate: String
    endDate: String
  }

  type Guide {
    _id: ID
    name: String
    address: String
    photo: String
    contactPhone: String
    categories: [Category]
  }

  type User {
    _id: ID
    username: String
    email: String
    phone: String
    guides: [Guide]
    subscription: Subscription
    subscriptionStatus: Boolean
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    guides: User
    guide(guideId: ID): Guide
    subsription: User
  }

  type Mutation {
    addUser(username: String!, email: String!, phone: String! password: String!): Auth
    login(email: String!, password: String!): Auth
    addGuide(name: String, address: String, photo: String, contactPhone: String): Guide
    addCategory(name: String!, description: String!): Guide
    addSubscription(name: String!, propertiesAllowed: Int!, startDate: String, endDate: String): User
  }
`;

module.exports = typeDefs;