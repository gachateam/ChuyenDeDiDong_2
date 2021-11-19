import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {ACTIONS} from '../../context/AuthContext/Action';
import {useAuth} from '../../context/AuthContext';
import {Avatar} from 'react-native-paper';

const EditProfileScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
  });

  const {dispatch} = useAuth();
  const usernameCharacter = 24;
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passCharacter = 6;
  const [errUsername, setErrUsername] = useState('');
  const [errEmail, setErrEmail] = useState('');
  const [errPass, setErrPass] = useState('');
  const [errConfirmPass, setErrConfirmPass] = useState('');
  // login error when sent email and password to firebase
  const [loginError, setLoginError] = React.useState('');

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

  const handleEmailChange = val => {
    setData({
      ...data,
      email: val.trim(),
      check_textInputChange: val.trim().length !== 0,
    });
    if (!emailRegex.test(val.trim())) {
      return setErrEmail('Please enter valid email');
    } else {
      return setErrEmail('');
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val.trim(),
    });
    if (val.trim().length < passCharacter - 1) {
      return setErrPass(`Password must be ${passCharacter} characters long.`);
    } else {
      return setErrPass('');
    }
  };

  const handleConfirmPasswordChange = val => {
    setData({
      ...data,
      confirm_password: val.trim(),
    });
    if (val.trim().length < passCharacter - 1) {
      return setErrConfirmPass(
        `Password must be ${passCharacter} characters long.`,
      );
    } else {
      return setErrConfirmPass('');
    }
  };

  const handleSignUp = () => {
    if (
      data.username === '' ||
      data.email === '' ||
      data.password === '' ||
      data.confirm_password === ''
    ) {
      return setLoginError(
        "Can't empty username, email, password, comfirm password.",
      );
    }

    if (errUsername || errEmail || errPass || errConfirmPass) {
      return setLoginError(
        'Please enter valid username, email, password, comfirm password.',
      );
    }

    if (data.password !== data.confirm_password) {
      return setLoginError('Please enter valid password and comfirm password.');
    }

    const cred = firebase.auth.EmailAuthProvider.credential(
      data.email,
      data.password,
    );

    auth()
      .currentUser.linkWithCredential(cred)
      .then(() => {
        dispatch({type: ACTIONS.LOGIN, payload: auth().currentUser});
        firestore()
          .collection('users')
          .doc(auth().currentUser.uid)
          .set({
            username: data.username,
          })
          .catch(error => {
            console.log(
              'Something went wrong with added user to firestore: ',
              error,
            );
          });
      })
      .catch(err => setLoginError(err.message));
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
        <Avatar.Image
          size={70}
          source={{
            uri: 'https://cdn6.aptoide.com/imgs/3/7/b/37bdd8cc95f5aac3a85b0f2a2f1b6dc3_icon.png',
          }}
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Họ tên"
              placeholderTextColor="grey"
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
              placeholder="Email"
              placeholderTextColor="grey"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handleEmailChange(val)}
            />
          </View>
          {!(errEmail === '') && (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>{errEmail}</Text>
            </Animatable.View>
          )}
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Mật khẩu"
              placeholderTextColor="grey"
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={val => handlePasswordChange(val)}
            />
          </View>
          {!(errPass === '') && (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>{errPass}</Text>
            </Animatable.View>
          )}
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Xác nhận mật khẩu"
              placeholderTextColor="grey"
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={val => handleConfirmPasswordChange(val)}
            />
          </View>
          {!(errConfirmPass === '') && (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>{errConfirmPass}</Text>
            </Animatable.View>
          )}
          {!(loginError === '') && (
            <Animatable.View animation="tada" duration={1000}>
              <Text style={[styles.errorMsg, styles.errLoginMess]}>
                {loginError}
                {console.log(loginError)}
              </Text>
            </Animatable.View>
          )}
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={styles.color_textPrivateBold}>Terms of service</Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={styles.color_textPrivateBold}>Privacy policy</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => handleSignUp()}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}>
                <Text style={styles.textSignUp}>Sign Up</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('SignInScreen')}
              style={[styles.signIn, styles.buttonSignIn]}>
              <Text style={styles.textSignIn}>Sign In</Text>
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
    flex: Platform.OS === 'ios' ? 3 : 5,
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
});
