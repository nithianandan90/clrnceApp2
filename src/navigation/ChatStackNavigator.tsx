import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatsScreen from '../screens/Chats/ChatsScreen';
import ChatRoomScreen from '../screens/Chats/ChatRoomScreen';
import ChatContextProvider from '../contexts/ChatContext';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <ChatContextProvider>
      <Stack.Navigator>
        <Stack.Screen name="Chats" component={ChatsScreen} />
        <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
      </Stack.Navigator>
    </ChatContextProvider>
  );
};
