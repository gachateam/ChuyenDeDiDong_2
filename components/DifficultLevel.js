import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import Entypo from 'react-native-vector-icons/Entypo';
import {ACTIONS} from '../context/Action';
import {useGlobal} from '../context/GlobalContext';

const DifficultLevel = ({
  stage1,
  stage2,
  stage3,
  challengeUnlock,
  disabled,
  navigation,
}) => {
  const {hideTabBar, dispatch} = useGlobal();
  const onPress = () => {
    dispatch({type: ACTIONS.HIDE_TAB_BAR, payload: !hideTabBar});
    navigation.navigate('SplashScreen');
  };
  return (
    <View>
      <View style={styles.stage1}>
        <TouchableOpacity onPress={onPress} disabled={disabled}>
          <ProgressCircle
            percent={stage1}
            radius={50}
            borderWidth={4}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff">
            <Text style={styles.text}>{'Tiến độ 1'}</Text>
          </ProgressCircle>
        </TouchableOpacity>
      </View>
      <View style={styles.stage23}>
        <TouchableOpacity onPress={onPress} disabled={disabled}>
          <ProgressCircle
            percent={stage2}
            radius={50}
            borderWidth={4}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff">
            <Text style={styles.text}>{'Tiến độ 2'}</Text>
          </ProgressCircle>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} disabled={disabled}>
          <ProgressCircle
            percent={stage3}
            radius={50}
            borderWidth={4}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff">
            <Text style={styles.text}>{'Tiến độ 3'}</Text>
          </ProgressCircle>
        </TouchableOpacity>
      </View>

      <View style={styles.challenge}>
        <View style={styles.challengeBox}>
          <Entypo
            name={challengeUnlock ? 'lock-open' : 'lock'}
            size={32}
            style={styles.lock}
          />
          <Text style={styles.textOnTap}>Ôn tập</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stage1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  stage23: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  challenge: {
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  challengeBox: {
    width: '25%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#0000CD',
    borderRadius: 50,
    padding: 4,
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
  },
  lock: {
    fontSize: 18,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 5,
  },
  textOnTap: {
    justifyContent: 'center',
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default DifficultLevel;
