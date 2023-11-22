import {CognitoUser, CognitoUserAttribute} from 'amazon-cognito-identity-js';
import {
  AuthUser,
  getCurrentUser,
  fetchUserAttributes,
  FetchUserAttributesOutput,
} from 'aws-amplify/auth';
import {Hub} from 'aws-amplify/utils';
import {
  Dispatch,
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';
import {HubCallback} from '@aws-amplify/core';

type UserType = AuthUser | null | undefined;
type UserAttributesType = FetchUserAttributesOutput | null | undefined;

type AuthContextType = {
  user: UserType;
  userAttributes: UserAttributesType;
  userId: string;
  checkUser: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  userAttributes: undefined,
  userId: '',
  checkUser: async () => {},
});

const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<UserType>(undefined);
  const [userAttributes, setUserAttributes] = useState<UserAttributesType>();

  // console.log('usr', userAttributes);

  const checkUser = async () => {
    try {
      const authUser = await getCurrentUser();
      const authUserAttributes = await fetchUserAttributes();

      // console.log(
      //   'set user firing',
      //   authUser.username,
      //   authUser.userId,
      //   authUser.signInDetails,
      // );
      setUser(authUser);
      setUserAttributes(authUserAttributes);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener: HubCallback = data => {
      //   console.log(data);

      const {event} = data.payload;
      if (event === 'signOut') {
        setUser(null);
      }
      if (event === 'signIn') {
        checkUser();
      }
    };
    const listenerHandle = Hub.listen('auth', listener);

    // In your component's cleanup function (e.g., useEffect cleanup)
    return () => {
      // Remove the listener using the listenerHandle
      listenerHandle();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{user, userAttributes, userId: user?.userId || '', checkUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
