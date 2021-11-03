import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import DifficultLevel from '../components/DifficultLevel';
import {useDrawerStatus} from '@react-navigation/drawer';
import {useGlobal} from '../context/GlobalContext';
import {ACTIONS} from '../context/Action';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

const image = {uri: "https://firebasestorage.googleapis.com/v0/b/englishlearning-ec586.appspot.com/o/250966642_559763815111848_1955696526273842802_n.png?alt=media&token=2378d749-8cfc-4722-b4e4-c00d51fdda78"}

const StageScreen = ({navigation}) => {
  const isDrawerOpen = useDrawerStatus() === 'open';
  const {dispatch} = useGlobal();
  useEffect(() => {
    dispatch({type: ACTIONS.HIDE_TAB_BAR, payload: isDrawerOpen});
  }, [isDrawerOpen, dispatch]);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <ScrollView style={styles.scrollView}>
        <DifficultLevel
          stage1={30}
          stage2={40}
          stage3={50}
          challengeUnlock={false}
          disabled={false}
          navigation={navigation}
        />
        <DifficultLevel
          stage1={0}
          stage2={0}
          stage3={0}
          challengeUnlock={false}
          disabled={true}
          navigation={navigation}
        />
        <DifficultLevel
          stage1={0}
          stage2={0}
          stage3={0}
          challengeUnlock={false}
          disabled={true}
          navigation={navigation}
        />
      </ScrollView>
      </ImageBackground>
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
  image:{
    flex: 1,
    justifyContent: "center"
  }
});

export default StageScreen;
