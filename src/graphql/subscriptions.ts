/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateItem = /* GraphQL */ `subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
  onCreateItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateItemSubscriptionVariables,
  APITypes.OnCreateItemSubscription
>;
export const onUpdateItem = /* GraphQL */ `subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
  onUpdateItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateItemSubscriptionVariables,
  APITypes.OnUpdateItemSubscription
>;
export const onDeleteItem = /* GraphQL */ `subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
  onDeleteItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteItemSubscriptionVariables,
  APITypes.OnDeleteItemSubscription
>;
export const onCreateDeal = /* GraphQL */ `subscription OnCreateDeal($filter: ModelSubscriptionDealFilterInput) {
  onCreateDeal(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDealSubscriptionVariables,
  APITypes.OnCreateDealSubscription
>;
export const onUpdateDeal = /* GraphQL */ `subscription OnUpdateDeal($filter: ModelSubscriptionDealFilterInput) {
  onUpdateDeal(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDealSubscriptionVariables,
  APITypes.OnUpdateDealSubscription
>;
export const onDeleteDeal = /* GraphQL */ `subscription OnDeleteDeal($filter: ModelSubscriptionDealFilterInput) {
  onDeleteDeal(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDealSubscriptionVariables,
  APITypes.OnDeleteDealSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
