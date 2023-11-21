/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getItem = /* GraphQL */ `query GetItem($id: ID!) {
  getItem(id: $id) {
    id
    name
    price
    description
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetItemQueryVariables, APITypes.GetItemQuery>;
export const listItems = /* GraphQL */ `query ListItems(
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      price
      description
      image
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListItemsQueryVariables, APITypes.ListItemsQuery>;
export const getDeal = /* GraphQL */ `query GetDeal($id: ID!) {
  getDeal(id: $id) {
    id
    lat
    lng
    radius
    description
    maxRadius
    expiryDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetDealQueryVariables, APITypes.GetDealQuery>;
export const listDeals = /* GraphQL */ `query ListDeals(
  $filter: ModelDealFilterInput
  $limit: Int
  $nextToken: String
) {
  listDeals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      lat
      lng
      radius
      description
      maxRadius
      expiryDate
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListDealsQueryVariables, APITypes.ListDealsQuery>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    image
    address
    lat
    lng
    email
    fcmToken
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      image
      address
      lat
      lng
      email
      fcmToken
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
