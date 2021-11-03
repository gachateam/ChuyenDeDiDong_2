import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useGlobal} from '../context/GlobalContext';
import {ACTIONS} from './../context/Action';

const Header = ({navigation}) => {
  const [progressStatus, setProgressStatus] = useState(0);

  const {hideTabBar, dispatch} = useGlobal();
  const anim = new Animated.Value(0);

  useEffect(() => {
    onAnimate();
    return () => {
      anim.stopAnimation();
    };
  }, [onAnimate]);

  const onAnimate = () => {
    Animated.timing(anim, {
      toValue: 100,
      duration: 50000,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    // navigation.navigate('Home');
    dispatch({type: ACTIONS.HIDE_TAB_BAR, payload: !hideTabBar});
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Home',
        },
      ],
    });
  };

  return (
    <View style={styles.container}>
      <MaterialIcons name="arrow-back-ios" size={32} onPress={handlePress} />
      <View style={styles.containerProgress}>
        <Animated.View style={[styles.inner, {width: progressStatus + '%'}]} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: -10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerProgress: {
    width: '80%',
    justifyContent: 'center',
    backgroundColor: 'gray',
    height: 3,
    borderRadius: 20,
  },
  label: {
    fontSize: 23,
    color: 'black',
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
  },
  inner: {
    width: '100%',
    height: 7,
    borderRadius: 20,
    backgroundColor: 'green',
  },
});
