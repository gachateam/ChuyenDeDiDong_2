import * as React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerContent} from './DrawerContent';
import StageScreen from './StageScreen';
import {useGlobal} from '../context/GlobalContext';
import SplashScreen from './SplashScreen';
import QuestionScreen from './QuestionScreen';
import { BottomPopup } from './BottomPopup';

function HomeScreens({navigation}) {

  let popupRef = React.createRef()

  const onShowPopup = () => {
    popupRef.show()
  }
  const onClosePopup = () => {
    popupRef.close()
  }
  
const popupList = [
  {
    id:1,
    name:'Task'
  },
  {
    id:2,
    name:'Message'
  },
  {
    id:3,
    name:'Note'
  },
]
  
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={onShowPopup}>123</Text>
      <BottomPopup
          title="YOU đã chọn đúng , tiếp tục phát huy đi ...."
          ref={(target) => popupRef = target}
          onTouchOutside={onClosePopup}
          data={popupList}
          />
    </View>
  );
}


const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  const {title} = useGlobal();
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreens} />
        <Drawer.Screen
          name="StageScreen"
          component={StageScreen}
          options={{title: title}}
        />
        <Drawer.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="QuestionScreen"
          component={QuestionScreen}
          options={{title: 'question'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
