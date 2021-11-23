import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Avatar, IconButton, Title} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useAuth} from '../../context/AuthContext';
import {ACTIONS} from '../../context/AuthContext/Action';

const AlreadySignInScreen = ({navigation}) => {
  const {dispatch} = useAuth();
  const handleSignout = () => {
    auth().signOut();
    dispatch({type: ACTIONS.LOGIN, payload: null});
  };
  console.log(auth().currentUser);
  const [username, setUsername] = useState(null);
  useEffect(() => {
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .get()
      .then(documentSnapshot => {
        console.log('User exists: ', documentSnapshot.exists);

        if (documentSnapshot.exists) {
          console.log('User data: ', documentSnapshot.data().username);
          setUsername(documentSnapshot.data().username);
        }
      });
  }, [username]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfor}>
        <View style={styles.innerUserInfor}>
          <Avatar.Image
            size={70}
            source={{
              uri: 'https://cdn6.aptoide.com/imgs/3/7/b/37bdd8cc95f5aac3a85b0f2a2f1b6dc3_icon.png',
            }}
          />
          <View>
            <View style={styles.content}>
              <Title>{username}</Title>
              <IconButton
                icon="square-edit-outline"
                size={20}
                onPress={() => navigation.navigate('EditProfileScreen')}
              />
            </View>

            <TouchableOpacity onPress={handleSignout}>
              <Text style={styles.signOutButton}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfor: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  innerUserInfor: {
    flexDirection: 'row',
    marginTop: 15,
  },
  content: {
    marginLeft: 20,
    marginTop: 4,
    flexDirection: 'row',
  },
  signOutButton: {
    marginLeft: 20,
  },
});

export default AlreadySignInScreen;
