import React from 'react'
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import DifficultLevel from '../components/DifficultLevel';

const StageScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <DifficultLevel
          stage1={30}
          stage2={40}
          stage3={50}
          challengeUnlock={false}
          backgroundC={true}
          disabled={false}
          navigation={navigation}
        />
        <DifficultLevel
          stage1={0}
          stage2={0}
          stage3={0}
          challengeUnlock={false}
          backgroundC={false}
          disabled={true}
          navigation={navigation}
        />
        <DifficultLevel
          stage1={0}
          stage2={0}
          stage3={0}
          challengeUnlock={false}
          backgroundC={false}
          disabled={true}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {},
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
    backgroundColor: 'orange',
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StageScreen;