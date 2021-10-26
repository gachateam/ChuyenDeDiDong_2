import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Avatar, IconButton, Title, Colors, Caption } from 'react-native-paper';

const ProfilesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfor}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image size={70} source={{ uri: 'https://cdn6.aptoide.com/imgs/3/7/b/37bdd8cc95f5aac3a85b0f2a2f1b6dc3_icon.png' }} />
          <View>
            <View style={{ marginLeft: 20, marginTop: 4, flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('')}>
                <Title>Đăng nhập /</Title>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('')}>
                <Title> Đăng kí</Title>
              </TouchableOpacity>
            </View>
            {/* <IconButton icon="square-edit-outline"
            color={Colors.red500}
            size={20}
            onPress={() => console.log('Pressed')}
            style={{marginLeft: 'auto'}} /> */}
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
});

export default ProfilesScreen;
