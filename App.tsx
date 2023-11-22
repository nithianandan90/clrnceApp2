/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, Text} from 'react-native';

import {Amplify} from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
import {withAuthenticator} from '@aws-amplify/ui-react-native';
import Client from './src/apollo/Client';
import {gql, useQuery} from '@apollo/client';
import ChatScreen from './src/screens/Chats/ChatScreen';
import AuthContextProvider from './src/contexts/AuthContext';

Amplify.configure(amplifyconfig);

const App = () => {
  return (
    <SafeAreaView>
      <AuthContextProvider>
        <Client>
          <ChatScreen />
        </Client>
      </AuthContextProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withAuthenticator(App);
