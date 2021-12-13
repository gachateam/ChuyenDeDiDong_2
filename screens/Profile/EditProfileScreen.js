import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Avatar } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

const EditProfileScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    username: '',
    currentpassword: '',
    newpassword: '',
    confirm_password: '',
    check_textInputChange: false,
  });

  const usernameCharacter = 24;
  const passCharacter = 6;
  const [errUsername, setErrUsername] = useState('');
  const [errCurrentPass, setErrCurrentPass] = useState('');
  const [errNewPass, setErrNewPass] = useState('');
  const [errConfirmNewPass, setErrConfirmCurrentPass] = useState('');
  const [username, setUsername] = useState(null);
  const [imageUriGallary, setimageUriGallary] = useState({
    uri: auth().currentUser.providerData[0].photoURL,
  });
  const [fileName, setfileName] = useState(null);
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
          const source = { uri: documentSnapshot.data().photoURL };
          setimageUriGallary(source);
          console.log(imageUriGallary);
        }
      });
  }, [username]);

  const handleUsernameChange = val => {
    setData({
      ...data,
      username: val.trim(),
    });
    if (val.trim().length > usernameCharacter) {
      return setErrUsername(
        `Username can't be ${usernameCharacter} characters long.`,
      );
    } else {
      return setErrUsername('');
    }
  };

  const handleCurrentPasswordChange = val => {
    setData({
      ...data,
      currentpassword: val.trim(),
    });
    if (val.trim().length < passCharacter - 1) {
      return setErrCurrentPass(
        `Password must be ${passCharacter} characters long.`,
      );
    } else {
      return setErrCurrentPass('');
    }
  };

  const handleNewPasswordChange = val => {
    setData({
      ...data,
      newpassword: val.trim(),
    });
    if (val.trim().length < passCharacter - 1) {
      return setErrNewPass(
        `Password must be ${passCharacter} characters long.`,
      );
    } else {
      return setErrNewPass('');
    }
  };

  const handleConfirmNewPasswordChange = val => {
    setData({
      ...data,
      confirm_password: val.trim(),
    });
    if (val.trim().length < passCharacter - 1) {
      return setErrConfirmCurrentPass(
        `Password must be ${passCharacter} characters long.`,
      );
    } else {
      return setErrConfirmCurrentPass('');
    }
  };

  const reauthenticate = currentpassword => {
    var user = auth().currentUser;
    var cred = auth.EmailAuthProvider.credential(user.email, currentpassword);
    return user.reauthenticateWithCredential(cred);
  };

  const openGallery = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // You can also display the image using data:

        const source = { uri: response.assets[0].uri };
        setimageUriGallary(source);
        setfileName(response.assets[0].fileName);
      }
    });
  };

  const updateProfile = async () => {

    let getUrl = '';
    // path to existing file on filesystem
    const reference = storage().ref(fileName);

    // uploads file

    await reference.putFile(imageUriGallary.uri);
    await reference.getDownloadURL().then(url => {
      getUrl = url;
    });

    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .update({
        username: data.username,
        photoURL: getUrl,
      })
      .then(() => {
        Alert.alert('User update!', 'Go to Profile', [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          { text: 'OK', onPress: () => navigation.goBack() },
        ]);
      });

    if (data.currentpassword != '' || data.newpassword != '' || data.confirm_password != '') {
      reauthenticate(data.currentpassword)
        .then(() => {
          auth()
            .currentUser.updatePassword(data.newpassword)
            .then(() => {
              Alert.alert('Password was changed');
            })
            .catch(error => {
              console.log(error.message);
            });
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Edit Profile</Text>
        <TouchableOpacity onPress={() => openGallery()}>

          <Avatar.Image
            style={styles.avatar}
            size={70}
            source={imageUriGallary}
          />
        </TouchableOpacity>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              defaultValue={username}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handleUsernameChange(val)}
            />
          </View>
          {!(errUsername === '') && (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>{errUsername}</Text>
            </Animatable.View>
          )}
          <View style={styles.action}>
            <Feather name="mail" color="#05375a" size={20} />
            <TextInput
              placeholder={auth().currentUser.email}
              placeholderTextColor="grey"
              style={styles.textInput}
              autoCapitalize="none"
              editable={false}
            />
          </View>

          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Mật khẩu cũ"
              placeholderTextColor="grey"
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={val => handleCurrentPasswordChange(val)}
            />
          </View>
          {!(errCurrentPass === '') && (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>{errCurrentPass}</Text>
            </Animatable.View>
          )}
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Mật khẩu mới"
              placeholderTextColor="grey"
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={val => handleNewPasswordChange(val)}
            />
          </View>
          {!(errNewPass === '') && (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>{errNewPass}</Text>
            </Animatable.View>
          )}
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Xác nhận mật khẩu mới"
              placeholderTextColor="grey"
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={val => handleConfirmNewPasswordChange(val)}
            />
          </View>
          {!(errConfirmNewPass === '') && (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>{errConfirmNewPass}</Text>
            </Animatable.View>
          )}
          <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={updateProfile}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}
              >
                <Text style={styles.textSignUp}>Update</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 40,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSignUp: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
  color_textPrivateBold: {
    color: 'grey',
    fontWeight: 'bold',
  },
  buttonSignIn: {
    borderColor: '#009387',
    borderWidth: 1,
    marginTop: 15,
  },
  textSignIn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#009387',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  avatar: { marginTop: 15 },
});
