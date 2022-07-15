import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user {
    user {
    username
    _id
    email
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
  }
  }
`;