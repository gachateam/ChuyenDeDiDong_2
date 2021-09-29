import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from 'react-native-vector-icons/AntDesign';

const links = [
  {
    id: 1,
    title: 'Animal',
    description: 'All thing about animal',
  },
  {
    id: 2,
    title: 'Fruit',
    description: 'All thing about fruit',
  },
  {
    id: 3,
    title: 'At Home',
    description: 'Items at home',
  },
  {
    id: 4,
    title: 'At School',
    description: 'Items at school',
  },
  {
    id: 5,
    title: 'Travel',
    description: 'When you travel',
  },
];

function HomeScreens({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function HomeScreen() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreens} options={{
          drawerLabel: "12315"
        }} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
