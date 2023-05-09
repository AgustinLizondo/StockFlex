import React from 'react';
import { useSelector } from 'react-redux';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import LoggedNavigator from './LoggedNavigator';
import AuthNavigator from './AuthNavigator';
import theme from '../theme';
import { GlobalState } from '../types';

function AppContainer() {
  const { isUserLogged } = useSelector((state: GlobalState) => state.auth);

  axios.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
  );

  return (
    <NativeBaseProvider
      theme={theme}
    >
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <NavigationContainer>
        {isUserLogged ? (
          <LoggedNavigator />
        ) : (
          <AuthNavigator />
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default AppContainer;
