import React, {useEffect, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useGlobal} from '../context/GlobalContext';
import AuthChange from './Profile/AuthChange';

const Tab = createBottomTabNavigator();

const TabButton = props => {
  const {name, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: {scale: 1, rotate: '0deg'},
        1: {scale: 1.5, rotate: '360deg'},
      });
    } else {
      viewRef.current.animate({
        0: {scale: 1.5, rotate: '360deg'},
        1: {scale: 1, rotate: '0deg'},
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={1}
    >
      <Animatable.View ref={viewRef} style={styles.container} duration={1000}>
        <AntDesign
          name={name}
          size={24}
          color={focused ? '#FF0033' : '#000066'}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

const MyTabs = ({navigation}) => {
  const {hideTabBar} = useGlobal();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          height: hideTabBar ? 0 : 60,
          position: 'absolute',
          bottom: hideTabBar ? 0 : 16,
          right: 16,
          left: 16,
          borderRadius: 10,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarButton: props => <TabButton {...props} name="home" />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarButton: props => <TabButton {...props} name="setting" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AuthChange}
        options={{
          tabBarShowLabel: false,
          tabBarButton: props => <TabButton {...props} name="profile" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
