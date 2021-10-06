import React from 'react';
import {View, Button, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


function StageScreens({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>Tiến Độ 1 </Text>
    
    </View>
  );

function StageScreens({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>Tiến Độ 2 </Text>
    
    </View>
  );
}
function StageScreens({ navigation }) {
  return (
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
       <Text>Tiến Độ 3 </Text>
    
    </View>
  );
}
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Back Home" />
    </View>
  );
}

export default function StageScreens() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
}


export default Text
