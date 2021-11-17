import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AlreadySignInScreen from './AlreadySignInScreen';
import EditProfileScreen from './EditProfileScreen';

const Stack = createStackNavigator();

const StackProfileScreen = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AlreadySignInScreen" component={AlreadySignInScreen}/>
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default StackProfileScreen;
