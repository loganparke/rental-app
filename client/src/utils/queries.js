import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user {
    user {
    username
    _id
    email
    phone
    guides {
      _id
      address
      name
      contactPhone
      photo
      categories {
        _id
        name
        description
      }
    }
    subscriptionStatus
    subscription {
      _id
      startDate
      endDate
      propertiesAllowed
      price
    }
  }
  }
`;

export const QUERY_GUIDE = gql`
  query guide($guideId: ID) {
  guide(guideId: $guideId) {
    _id
      name
      address
      contactPhone
      photo
      categories {
        _id
        description
        name
      }
      poi{
        _id
        name
        lat
        lng
      }
  }
}
`;

export const QUERY_CLIENT_USER = gql`
  query clientUser($userId: ID) {
  clientUser(userId: $userId) {
    subscriptionStatus
    _id
    username
}
}
`;