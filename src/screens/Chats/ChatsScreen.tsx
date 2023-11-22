import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {gql, useQuery} from '@apollo/client';
import {ListUsersQuery, ListUsersQueryVariables} from '../../API';
import {useChatContext} from '../../contexts/ChatContext';
import {ChannelList} from 'stream-chat-react-native';
import {StreamChat, Channel} from 'stream-chat';
import {useNavigation} from '@react-navigation/native';
import {
  ChatNavigationProp,
  ChatStackNavigatorParamList,
} from '../../types/navigation';
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
  const {setCurrentChannel} = useChatContext();

  const navigation = useNavigation<ChatNavigationProp>();

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

  const onSelect = (channel: Channel) => {
    setCurrentChannel(channel);
    navigation.navigate('ChatRoom');
  };

  return <ChannelList onSelect={onSelect} />;
};

export default ChatsScreen;

const styles = StyleSheet.create({});
