import React from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {Avatar, Title} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const ProfilesScreen = ({navigation}) => {
  console.log(auth().currentUser);
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
              <TouchableOpacity
                onPress={() => navigation.navigate('SignInScreen')}>
                <Title>Đăng nhập /</Title>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUpScreen')}>
                <Title> Đăng kí</Title>
              </TouchableOpacity>
            </View>
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
  content: {
    marginLeft: 20,
    marginTop: 4,
    flexDirection: 'row',
  },
  innerUserInfor: {
    flexDirection: 'row',
    marginTop: 15,
  },
});

export default ProfilesScreen;
