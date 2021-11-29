import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import ProgressCircle from 'react-native-progress-circle';
import Entypo from 'react-native-vector-icons/Entypo';
import {ACTIONS} from '../context/Action';
import {useGlobal} from '../context/GlobalContext';
import {Stage} from './../Model/Stage';

const DifficultLevel = ({
  stage1,
  stage2,
  stage3,
  challengeUnlock,
  disabled,
  navigation,
  level,
}) => {
  const {hideTabBar, dispatch} = useGlobal();
  const onPress = stage => {
    dispatch({type: ACTIONS.HIDE_TAB_BAR, payload: !hideTabBar});
    navigation.navigate('SplashScreen');
    dispatch({
      type: ACTIONS.CHOOSE_UNIT,
      payload: new Stage({difficult: level, stage: stage}),
    });
  };
  return (
    <View>
      <View style={styles.stage1}>
        <TouchableOpacity
          onPress={() => onPress(0)}
          disabled={disabled || stage1 === 0}>
          <ProgressCircle
            percent={!!stage1?stage1:0}
            radius={50}
            borderWidth={4}
            color="#1597E5"
            shadowColor="#999"
            bgColor={disabled && stage1 === 0 ? '#999' : '#fff'}>
            <IconButton icon="ballot-outline" size={32} />
          </ProgressCircle>
        </TouchableOpacity>
      </View>
      <View style={styles.stage23}>
        <TouchableOpacity
          onPress={() => onPress(1)}
          disabled={disabled || stage2 === 0}>
          <ProgressCircle
            percent={!!stage2?stage1:0}
            radius={50}
            borderWidth={4}
            color="#1597E5"
            shadowColor="#999"
            bgColor={disabled && stage2 === 0 ? '#999' : '#fff'}>
            <IconButton icon="book-open-page-variant" size={32} />
          </ProgressCircle>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPress(2)}
          disabled={disabled || stage3 === 0}>
          <ProgressCircle
            percent={!!stage3?stage1:0}
            radius={50}
            borderWidth={4}
            color="#1597E5"
            shadowColor="#999"
            bgColor={disabled && stage3 === 0 ? '#999' : '#fff'}>
            <IconButton icon="brain" size={32} />
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
    backgroundColor: '#3399FF',
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
