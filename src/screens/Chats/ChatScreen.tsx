import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {gql, useQuery} from '@apollo/client';
import {ListUsersQuery, ListUsersQueryVariables} from '../../API';

const listUsers = gql`
  query ListUsers(
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
`;

const ChatScreen = () => {
  const {data, loading, error} = useQuery<
    ListUsersQuery,
    ListUsersQueryVariables
  >(listUsers);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  console.log(data);

  return (
    <View>
      <Text>ChatScreen</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
