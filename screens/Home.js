import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BottomPopup} from './BottomPopup';
import auth from '@react-native-firebase/auth';
import {useAuth} from '../context/AuthContext';
import {ACTIONS} from './../context/AuthContext/Action';

const popupList = [
  {
    id: 1,
    name: 'Task',
  },
  {
    id: 2,
    name: 'Message',
  },
  {
    id: 3,
    name: 'Note',
  },
];
function Home({navigation}) {
  let popupRef = React.createRef();
  const {dispatch, signinAnonymous} = useAuth();
  useEffect(() => {
    const unsubcribe = auth().onAuthStateChanged(u => {
      if (u) {
        dispatch({type: ACTIONS.LOGIN, payload: u});
      } else {
        if (signinAnonymous) {
          auth()
            .signInAnonymously()
            .then(() => {
              console.log('User signed in anonymously');
            });
        }
      }
    });
    return () => unsubcribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signinAnonymous]);

  const onShowPopup = () => {
    popupRef.show();
  };
  const onClosePopup = () => {
    popupRef.close();
  };

  return (
    <View style={styles.showPopup}>
      <Text onPress={onShowPopup}>123</Text>
      <BottomPopup
        title="YOU đã chọn đúng , tiếp tục phát huy đi ...."
        ref={target => (popupRef = target)}
        onTouchOutside={onClosePopup}
        data={popupList}
      />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  showPopup: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
