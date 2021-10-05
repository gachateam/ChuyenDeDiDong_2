/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './screens/MyTabs';
import GlobalContextProvider from './context/GlobalContext';

const App = () => {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </GlobalContextProvider>
  );
};

export default App;
