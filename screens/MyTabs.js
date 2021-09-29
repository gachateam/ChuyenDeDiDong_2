import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

const MyTabs = ({ navigation }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3 }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarBadge: 3 }} />
        </Tab.Navigator>
    );
}

export default MyTabs