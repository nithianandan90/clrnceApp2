/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createItem = /* GraphQL */ `mutation CreateItem(
  $input: CreateItemInput!
  $condition: ModelItemConditionInput
) {
  createItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateItemMutationVariables,
  APITypes.CreateItemMutation
>;
export const updateItem = /* GraphQL */ `mutation UpdateItem(
  $input: UpdateItemInput!
  $condition: ModelItemConditionInput
) {
  updateItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateItemMutationVariables,
  APITypes.UpdateItemMutation
>;
export const deleteItem = /* GraphQL */ `mutation DeleteItem(
  $input: DeleteItemInput!
  $condition: ModelItemConditionInput
) {
  deleteItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteItemMutationVariables,
  APITypes.DeleteItemMutation
>;
export const createDeal = /* GraphQL */ `mutation CreateDeal(
  $input: CreateDealInput!
  $condition: ModelDealConditionInput
) {
  createDeal(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDealMutationVariables,
  APITypes.CreateDealMutation
>;
export const updateDeal = /* GraphQL */ `mutation UpdateDeal(
  $input: UpdateDealInput!
  $condition: ModelDealConditionInput
) {
  updateDeal(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDealMutationVariables,
  APITypes.UpdateDealMutation
>;
export const deleteDeal = /* GraphQL */ `mutation DeleteDeal(
  $input: DeleteDealInput!
  $condition: ModelDealConditionInput
) {
  deleteDeal(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDealMutationVariables,
  APITypes.DeleteDealMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
