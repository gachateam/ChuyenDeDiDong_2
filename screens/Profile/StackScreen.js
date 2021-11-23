import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import ProfilesScreen from './ProfilesScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';

const Stack = createStackNavigator();

const StackScreen = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfilesScreen" component={ProfilesScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default StackScreen;
