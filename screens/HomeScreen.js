import * as React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './DrawerContent';
import StageScreen from './StageScreen';
import { useGlobal } from '../context/GlobalContext';

function HomeScreens({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>123</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  const { title } = useGlobal();
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreens} />
        <Drawer.Screen name="StageScreen" component={StageScreen} options={{ title: title }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default HomeScreen
