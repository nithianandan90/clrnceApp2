import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types/navigation';

import ChatsScreen from '../screens/Chats/ChatsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatStackNavigator from './ChatStackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const BottomTab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName="TabOne">
      <BottomTab.Screen name="TabOne" component={HomeScreen} />
      <BottomTab.Screen
        name="Chat"
        component={ChatStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen name="TabTwo" component={HomeScreen} />
    </BottomTab.Navigator>
  );
};

let stackScreens = (
  <>
    <Stack.Screen
      name="Home"
      component={BottomTabNavigator}
      options={{headerShown: false}}
    />
  </>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>{stackScreens}</Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
