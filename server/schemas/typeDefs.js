const { gql } = require('apollo-server-express');

const typeDefs = gql `

  type Category {
    _id: ID
    name: String
    description: String
  }

  type Poi {
    _id: ID
    name: String
    lat: Float
    lng: Float
  }

  type Subscription {
    _id: ID
    propertiesAllowed: Int
    startDate: String
    endDate: String
    price: Int
  }

  type Guide {
    _id: ID
    name: String
    address: String
    photo: String
    contactPhone: String
    categories: [Category]
    poi: [Poi]
  }

  type User {
    _id: ID
    username: String
    email: String
    phone: String
    guides: [Guide]
    subscription: [Subscription]
    subscriptionStatus: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    clientUser(userId: ID): User
    guides: User
    guide(guideId: ID): Guide
    subsription: User
  }

  type Mutation {
    # User Mutations
    addUser(username: String!, email: String!, phone: String! password: String!, subscriptionStatus: String!): Auth
    login(email: String!, password: String!): Auth
    # Guide Mutations
    addGuide(name: String, address: String, photo: String, contactPhone: String): Guide
    updateGuideTitle(guideId: ID!, name: String): Guide
    updateGuideAddress(guideId: ID!, address: String!): Guide
    # category inside guide mutations
    addCategory(guideId: ID!, name: String!, description: String!): Guide
    updateCategory(guideId: ID!, categoryId: ID! name: String!, description: String!): Guide
    deleteCategory(guideId: ID!, categoryId: ID!): Guide
    # POI inside guide mutations
    addPoi(guideId: ID!, name: String, lat: Float, lng: Float): Guide
    updatePoi(guideId: ID!, name: String, lat: Float, lng: Float): Guide
    # subsription mutations
    addSubscription(propertiesAllowed: Int, startDate: String, endDate: String, price: Int): User
    deleteSubscription(subscriptionId: String!): User
  }
`;

module.exports = typeDefs;