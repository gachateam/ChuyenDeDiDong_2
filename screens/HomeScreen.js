import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './DrawerContent'
import StageScreen from './StageScreen';


function HomeScreens({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        123
      </Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function HomeScreen() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreens} />
        <Drawer.Screen name="StageScreen" component={StageScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
