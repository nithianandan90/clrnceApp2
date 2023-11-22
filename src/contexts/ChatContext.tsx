import {createContext, useContext, useEffect, useState} from 'react';
import {StreamChat} from 'stream-chat';
import {useAuthContext} from './AuthContext';

export const ChatContext = createContext({});

const ChatContextProvider = ({children}: {children: React.ReactNode}) => {
  const {userAttributes} = useAuthContext();

  const [chatClient, setChatClient] = useState<StreamChat>();

  console.log('attributes chat context', userAttributes);

  useEffect(() => {
    const initChat = async () => {
      if (!userAttributes) {
        return;
      } else if (!userAttributes.sub) {
        return;
      }
      const client = StreamChat.getInstance('ebj4kzbc3uy5');

      // get information about the authenticated user

      // connect the user to the stream chat
      // in production mode, cant user devToken. Need to generate token in backend. Check documentation
      await client.connectUser(
        {
          id: userAttributes?.sub,
          name: userAttributes.name,
          image:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
        },
        client.devToken(userAttributes.sub),
      );

      setChatClient(client);
    };

    initChat();
  }, []);

  useEffect(() => {
    return () => {
      if (chatClient) {
        chatClient.disconnectUser();
      }
    };
  });

  const value = {user: 'Test username'};

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChatContext = () => useContext(ChatContext);

export default ChatContextProvider;
