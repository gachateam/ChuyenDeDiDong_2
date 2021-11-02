import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import ProfilesScreen from './ProfilesScreen';

const Stack = createStackNavigator();

const StackScreen = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfilesScreen" component={ProfilesScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Navigator>
    );
};

export default StackScreen;