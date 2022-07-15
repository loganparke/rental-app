import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        username
        phone
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $phone: String!, $password: String!) {
    addUser(username: $username, email: $email, phone: $phone, password: $password) {
      token
      user{
        _id
        email
        username
      }
    }
  }
`;

export const ADD_GUIDE = gql`
  mutation addGuide($name: String!, $address: String!, $photo: String, $contactPhone: String!) {
    addGuide(name: $name, address: $address, photo: $photo, contactPhone: $contactPhone) {
        _id
        name
        address
        photo
        contactPhone
    }
  }
`;