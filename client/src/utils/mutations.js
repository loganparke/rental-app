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
  mutation addUser($username: String!, $email: String!, $phone: String!, $password: String!, $subscriptionStatus: String!) {
    addUser(username: $username, email: $email, phone: $phone, password: $password, subscriptionStatus: $subscriptionStatus) {
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

export const UPDATE_GUIDE_TITLE = gql`
  mutation updateGuideTitle($guideId: ID!, $name: String!){
  updateGuideTitle(guideId: $guideId, name: $name) {
    _id
    name
    address
    photo
    contactPhone
    categories {
      _id
      name
      description
    }
  }
}
`;

export const UPDATE_GUIDE_ADDRESS = gql`
  mutation updateGuideAddress($guideId: ID!, $address: String!){
    updateGuideAddress(guideId: $guideId, address: $address) {
    _id
    name
    address
    photo
    contactPhone
    categories {
      _id
      name
      description
    }
  }
}
`;

export const ADD_CATEGORY = gql`
  mutation addCategory($guideId: ID!, $name: String!, $description: String!){
  addCategory(guideId: $guideId, name: $name, description: $description) {
    _id
    name
    address
    photo
    contactPhone
    categories {
      _id
      name
      description
    }
  }
}
`;

export const UPDATED_CATEGORY = gql`
  mutation updateCategory($guideId: ID!, $categoryId: ID! $name: String!, $description: String!) {
    updateCategory(guideId: $guideId, categoryId: $categoryId name: $name, description: $description) {
      _id
      name
      address
      photo
      contactPhone
      categories {
        _id
        name
        description
      }
    }
}
`;

export const DELETE_CATEGORY = gql`
  mutation deleteCategory($guideId: ID!, $categoryId: ID!) {
  deleteCategory(guideId: $guideId, categoryId: $categoryId) {
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
  }
}
`;

export const ADD_POI = gql`
  mutation addPoi($guideId: ID!, $name: String, $lat: Float, $lng: Float){
    addPoi(guideId: $guideId, name: $name, lat: $lat, lng: $lng) {
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
export const UPDATED_POI = gql`
  mutation updatePoi($guideId: ID!, $name: String, $lat: Float, $lng: Float){
    updatePoi(guideId: $guideId, name: $name, lat: $lat, lng: $lng){
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


export const ADD_SUBSRIPTION = gql `
  mutation addSubscription($propertiesAllowed: Int, $price: Int, $startDate: String, $endDate: String){
  addSubscription(propertiesAllowed: $propertiesAllowed, price: $price, startDate: $startDate, endDate: $endDate) {
    _id
    username
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

export const DELETE_SUBSCRIPTION = gql`
  mutation deleteSubscription($subscriptionId: String!) {
  deleteSubscription(subscriptionId: $subscriptionId) {
    username
    subscription {
      _id
    }
  }
}
`;