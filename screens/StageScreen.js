import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import DifficultLevel from '../components/DifficultLevel';
import {useDrawerStatus} from '@react-navigation/drawer';
import {useGlobal} from '../context/GlobalContext';
import {ACTIONS} from '../context/Action';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {Stage} from './../Model/Stage';

const image = {
  uri: 'https://firebasestorage.googleapis.com/v0/b/englishlearning-ec586.appspot.com/o/250966642_559763815111848_1955696526273842802_n.png?alt=media&token=2378d749-8cfc-4722-b4e4-c00d51fdda78',
};

const StageScreen = ({navigation}) => {
  const isDrawerOpen = useDrawerStatus() === 'open';
  const {dispatch, title, stage} = useGlobal();

  useEffect(() => {
    firestore()
      .collection('users/' + auth().currentUser.uid + '/category')
      .doc(title)
      .get()
      .then(documentSnapshot => {
        console.log('document category exists: ', documentSnapshot.exists);

        if (documentSnapshot.exists) {
          console.log('document category data: ', documentSnapshot.data());
          dispatch({
            type: ACTIONS.STAGE,
            payload: new Stage(documentSnapshot.data()),
          });
        } else {
          dispatch({
            type: ACTIONS.STAGE,
            payload: new Stage({difficult: 0, stage: 0}),
          });
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  const handleScroll = e => {
    dispatch({
      type: ACTIONS.HIDE_TAB_BAR,
      payload: e.nativeEvent.contentOffset.y > 10,
    });
  };

  useEffect(() => {
    dispatch({type: ACTIONS.HIDE_TAB_BAR, payload: isDrawerOpen});
  }, [isDrawerOpen, dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ScrollView style={styles.scrollView} onScroll={handleScroll}>
          {[0, 1, 2].map((e, i) => {
            return (
              <DifficultLevel
                key={i}
                stage1={stage && stage.getStage(e, 0)}
                stage2={stage && stage.getStage(e, 1)}
                stage3={stage && stage.getStage(e, 2)}
                challengeUnlock={!(stage && stage.difficult <= e)}
                disabled={stage && stage.difficult < e}
                challengeTouchable={stage && stage.difficult < e}
                navigation={navigation}
                level={e}
              />
            );
          })}
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
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default StageScreen;
