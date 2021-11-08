import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AlreadySignInScreen from './AlreadySignInScreen';

const Stack = createStackNavigator();

const StackProfileScreen = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="AlreadySignInScreen"
        component={AlreadySignInScreen}
      />
    </Stack.Navigator>
  );
};

export default StackProfileScreen;
