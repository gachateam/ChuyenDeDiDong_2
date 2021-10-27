/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './screens/MyTabs';
import GlobalContextProvider from './context/GlobalContext';

import { SafeAreaView,
          StyleSheet,
          StatusBar,
          Text,
          TouchableWithoutFeedback
} from 'react-native'
import { BottomPopup } from './screens/BottomPopup'

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



const App = () => {
  let popupRef = React.createRef()

  const onShowPopup = () => {
    popupRef.show()
  }
  const onClosePopup = () => {
    popupRef.close()
  }
  return (
    <>
    <GlobalContextProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </GlobalContextProvider>     
    </>
  )
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems: "center",
      justifyContent:"center"
  },
    txtSize: {
      fontSize: 20
    }
      
})

export default App;
