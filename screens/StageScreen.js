import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import DifficultLevel from '../components/DifficultLevel';
import { useDrawerStatus } from '@react-navigation/drawer';
import { useGlobal } from '../context/GlobalContext';
import { ACTIONS } from '../context/Action';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const image = {
  uri: 'https://firebasestorage.googleapis.com/v0/b/englishlearning-ec586.appspot.com/o/250966642_559763815111848_1955696526273842802_n.png?alt=media&token=2378d749-8cfc-4722-b4e4-c00d51fdda78',
};

const StageScreen = ({ navigation }) => {
  const isDrawerOpen = useDrawerStatus() === 'open';
  const { dispatch, title } = useGlobal();
  const [stage, setStage] = useState();
  useEffect(() => {
    firestore()
      .collection('users/' + auth().currentUser.uid + '/category')
      .doc(title)
      .get()
      .then(documentSnapshot => {
        console.log('document category exists: ', documentSnapshot.exists);

        if (documentSnapshot.exists) {
          console.log('document category data: ', documentSnapshot.data());
          setStage(documentSnapshot.data());
        } else {
          setStage({ difficult: 0, stage: 0 });
        }
      });
  }, []);

  const handleScroll = e => {
    dispatch({
      type: ACTIONS.HIDE_TAB_BAR,
      payload: e.nativeEvent.contentOffset.y > 10,
    });
  };

  useEffect(() => {
    dispatch({ type: ACTIONS.HIDE_TAB_BAR, payload: isDrawerOpen });
  }, [isDrawerOpen, dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ScrollView style={styles.scrollView} onScroll={handleScroll}>
          {[0, 1, 2].map((e, i) => {
            return (
              <DifficultLevel
                key={i}
                stage1={
                  stage && stage.difficult >= e
                    ? stage.stage >= 0
                      ? 100
                      : 0
                    : 0
                }
                stage2={
                  stage && stage.difficult >= e
                    ? stage.stage >= 1
                      ? 100
                      : 0
                    : 0
                }
                stage3={
                  stage && stage.difficult >= e
                    ? stage.stage >= 2
                      ? 100
                      : 0
                    : 0
                }
                challengeUnlock={false}
                disabled={stage && stage.difficult < e}
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
