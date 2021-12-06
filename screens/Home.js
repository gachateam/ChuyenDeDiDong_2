import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useAuth } from '../context/AuthContext';
import { ACTIONS } from './../context/AuthContext/Action';
import History from '../components/History';

function Home({ navigation }) {
  const { dispatch, signinAnonymous } = useAuth();
  useEffect(() => {
    const unsubcribe = auth().onAuthStateChanged(u => {
      if (u) {
        dispatch({ type: ACTIONS.LOGIN, payload: u });
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
  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.text}>Lịch sử</Text>
      <History />
      <Text style={styles.text}>Chủ đề</Text>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
  },
  text:{
    padding: 20,
    paddingBottom: 0,
    fontSize: 24,
  }
});
