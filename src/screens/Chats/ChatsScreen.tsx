import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {gql, useQuery} from '@apollo/client';
import {ListUsersQuery, ListUsersQueryVariables} from '../../API';
import {useChatContext} from '../../contexts/ChatContext';

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

const ChatsScreen = () => {
  const {user} = useChatContext();

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
      <Text>{user}</Text>
    </View>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({});
