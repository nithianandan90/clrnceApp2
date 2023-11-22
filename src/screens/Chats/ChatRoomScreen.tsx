import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useChatContext} from '../../contexts/ChatContext';

import {Channel, MessageList, MessageInput} from 'stream-chat-react-native';
const ChatRoomScreen = () => {
  const {currentChannel} = useChatContext();

  return (
    <Channel channel={currentChannel}>
      <MessageList />
      <MessageInput />
    </Channel>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({});
