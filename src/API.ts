/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateItemInput = {
  id?: string | null,
  name?: string | null,
  price?: string | null,
  description?: string | null,
  image?: string | null,
};

export type ModelItemConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelItemConditionInput | null > | null,
  or?: Array< ModelItemConditionInput | null > | null,
  not?: ModelItemConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Item = {
  __typename: "Item",
  id: string,
  name?: string | null,
  price?: string | null,
  description?: string | null,
  image?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateItemInput = {
  id: string,
  name?: string | null,
  price?: string | null,
  description?: string | null,
  image?: string | null,
};

export type DeleteItemInput = {
  id: string,
};

export type CreateDealInput = {
  id?: string | null,
  lat?: number | null,
  lng?: number | null,
  radius?: string | null,
  description?: string | null,
  maxRadius?: number | null,
  expiryDate?: string | null,
};

export type ModelDealConditionInput = {
  lat?: ModelFloatInput | null,
  lng?: ModelFloatInput | null,
  radius?: ModelStringInput | null,
  description?: ModelStringInput | null,
  maxRadius?: ModelFloatInput | null,
  expiryDate?: ModelStringInput | null,
  and?: Array< ModelDealConditionInput | null > | null,
  or?: Array< ModelDealConditionInput | null > | null,
  not?: ModelDealConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Deal = {
  __typename: "Deal",
  id: string,
  lat?: number | null,
  lng?: number | null,
  radius?: string | null,
  description?: string | null,
  maxRadius?: number | null,
  expiryDate?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDealInput = {
  id: string,
  lat?: number | null,
  lng?: number | null,
  radius?: string | null,
  description?: string | null,
  maxRadius?: number | null,
  expiryDate?: string | null,
};

export type DeleteDealInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  image?: string | null,
  address?: string | null,
  lat?: number | null,
  lng?: number | null,
  email?: string | null,
  fcmToken?: string | null,
  status?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  address?: ModelStringInput | null,
  lat?: ModelFloatInput | null,
  lng?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  fcmToken?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  image?: string | null,
  address?: string | null,
  lat?: number | null,
  lng?: number | null,
  email?: string | null,
  fcmToken?: string | null,
  status?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  address?: string | null,
  lat?: number | null,
  lng?: number | null,
  email?: string | null,
  fcmToken?: string | null,
  status?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelItemFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelItemFilterInput | null > | null,
  or?: Array< ModelItemFilterInput | null > | null,
  not?: ModelItemFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items:  Array<Item | null >,
  nextToken?: string | null,
};

export type ModelDealFilterInput = {
  id?: ModelIDInput | null,
  lat?: ModelFloatInput | null,
  lng?: ModelFloatInput | null,
  radius?: ModelStringInput | null,
  description?: ModelStringInput | null,
  maxRadius?: ModelFloatInput | null,
  expiryDate?: ModelStringInput | null,
  and?: Array< ModelDealFilterInput | null > | null,
  or?: Array< ModelDealFilterInput | null > | null,
  not?: ModelDealFilterInput | null,
};

export type ModelDealConnection = {
  __typename: "ModelDealConnection",
  items:  Array<Deal | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  address?: ModelStringInput | null,
  lat?: ModelFloatInput | null,
  lng?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  fcmToken?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionItemFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionDealFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  lat?: ModelSubscriptionFloatInput | null,
  lng?: ModelSubscriptionFloatInput | null,
  radius?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  maxRadius?: ModelSubscriptionFloatInput | null,
  expiryDate?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDealFilterInput | null > | null,
  or?: Array< ModelSubscriptionDealFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  lat?: ModelSubscriptionFloatInput | null,
  lng?: ModelSubscriptionFloatInput | null,
  email?: ModelSubscriptionStringInput | null,
  fcmToken?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type CreateItemMutationVariables = {
  input: CreateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type CreateItemMutation = {
  createItem?:  {
    __typename: "Item",
    id: string,
    name?: string | null,
    price?: string | null,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type UpdateItemMutation = {
  updateItem?:  {
    __typename: "Item",
    id: string,
    name?: string | null,
    price?: string | null,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput,
  condition?: ModelItemConditionInput | null,
};

export type DeleteItemMutation = {
  deleteItem?:  {
    __typename: "Item",
    id: string,
    name?: string | null,
    price?: string | null,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDealMutationVariables = {
  input: CreateDealInput,
  condition?: ModelDealConditionInput | null,
};

export type CreateDealMutation = {
  createDeal?:  {
    __typename: "Deal",
    id: string,
    lat?: number | null,
    lng?: number | null,
    radius?: string | null,
    description?: string | null,
    maxRadius?: number | null,
    expiryDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDealMutationVariables = {
  input: UpdateDealInput,
  condition?: ModelDealConditionInput | null,
};

export type UpdateDealMutation = {
  updateDeal?:  {
    __typename: "Deal",
    id: string,
    lat?: number | null,
    lng?: number | null,
    radius?: string | null,
    description?: string | null,
    maxRadius?: number | null,
    expiryDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDealMutationVariables = {
  input: DeleteDealInput,
  condition?: ModelDealConditionInput | null,
};

export type DeleteDealMutation = {
  deleteDeal?:  {
    __typename: "Deal",
    id: string,
    lat?: number | null,
    lng?: number | null,
    radius?: string | null,
    description?: string | null,
    maxRadius?: number | null,
    expiryDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    image?: string | null,
    address?: string | null,
    lat?: number | null,
    lng?: number | null,
    email?: string | null,
    fcmToken?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    image?: string | null,
    address?: string | null,
    lat?: number | null,
    lng?: number | null,
    email?: string | null,
    fcmToken?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    image?: string | null,
    address?: string | null,
    lat?: number | null,
    lng?: number | null,
    email?: string | null,
    fcmToken?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem?:  {
    __typename: "Item",
    id: string,
    name?: string | null,
    price?: string | null,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      name?: string | null,
      price?: string | null,
      description?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDealQueryVariables = {
  id: string,
};

export type GetDealQuery = {
  getDeal?:  {
    __typename: "Deal",
    id: string,
    lat?: number | null,
    lng?: number | null,
    radius?: string | null,
    description?: string | null,
    maxRadius?: number | null,
    expiryDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDealsQueryVariables = {
  filter?: ModelDealFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDealsQuery = {
  listDeals?:  {
    __typename: "ModelDealConnection",
    items:  Array< {
      __typename: "Deal",
      id: string,
      lat?: number | null,
      lng?: number | null,
      radius?: string | null,
      description?: string | null,
      maxRadius?: number | null,
      expiryDate?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    image?: string | null,
    address?: string | null,
    lat?: number | null,
    lng?: number | null,
    email?: string | null,
    fcmToken?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      address?: string | null,
      lat?: number | null,
      lng?: number | null,
      email?: string | null,
      fcmToken?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnCreateItemSubscription = {
  onCreateItem?:  {
    __typename: "Item",
    id: string,
    name?: string | null,
    price?: string | null,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem?:  {
    __typename: "Item",
    id: string,
    name?: string | null,
    price?: string | null,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem?:  {
    __typename: "Item",
    id: string,
    name?: string | null,
    price?: string | null,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDealSubscriptionVariables = {
  filter?: ModelSubscriptionDealFilterInput | null,
};

export type OnCreateDealSubscription = {
  onCreateDeal?:  {
    __typename: "Deal",
    id: string,
    lat?: number | null,
    lng?: number | null,
    radius?: string | null,
    description?: string | null,
    maxRadius?: number | null,
    expiryDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDealSubscriptionVariables = {
  filter?: ModelSubscriptionDealFilterInput | null,
};

export type OnUpdateDealSubscription = {
  onUpdateDeal?:  {
    __typename: "Deal",
    id: string,
    lat?: number | null,
    lng?: number | null,
    radius?: string | null,
    description?: string | null,
    maxRadius?: number | null,
    expiryDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDealSubscriptionVariables = {
  filter?: ModelSubscriptionDealFilterInput | null,
};

export type OnDeleteDealSubscription = {
  onDeleteDeal?:  {
    __typename: "Deal",
    id: string,
    lat?: number | null,
    lng?: number | null,
    radius?: string | null,
    description?: string | null,
    maxRadius?: number | null,
    expiryDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    image?: string | null,
    address?: string | null,
    lat?: number | null,
    lng?: number | null,
    email?: string | null,
    fcmToken?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    image?: string | null,
    address?: string | null,
    lat?: number | null,
    lng?: number | null,
    email?: string | null,
    fcmToken?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    image?: string | null,
    address?: string | null,
    lat?: number | null,
    lng?: number | null,
    email?: string | null,
    fcmToken?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
