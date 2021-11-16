import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import auth, { firebase } from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';



import { useTheme } from 'react-native-paper';

const SignInScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [data, setData] = React.useState({
    email: '',
    password: '',
    checkInputChange: false,
  });
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '269142696824-qqfi3h5d5oi0uokvl0mer95rmct73u9e.apps.googleusercontent.com',
    });
  }, []);

  // password charactor valid
  const passCharacter = 6;
  // email character valid
  const emailCharacter = 8;
  // user error
  const [emailError, setEmailError] = React.useState('');
  // login error when sent email and password to firebase
  const [loginError, setLoginError] = React.useState('');
  // password error when input password invalid
  const [passError, setPassError] = React.useState('');

  // set value of email and check valid email
  const handleEmailChange = val => {
    setData({
      ...data,
      email: val,
      checkInputChange: val.length !== 0,
    });
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val.trim())) {
      return setEmailError('Please enter valid email');
    } else if (!(val.trim().length > emailCharacter - 1)) {
      return setEmailError(`Email must be ${emailCharacter} characters long.`);
    } else {
      return setEmailError('');
    }
  };

  //check password
  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val.trim(),
    });
    setPassError(
      val.trim().length > passCharacter - 1
        ? ''
        : `Password must be ${passCharacter} characters long.`,
    );
  };

  const loginHandle = e => {
    if (data.email === '' || data.password === '') {
      return setLoginError("Can't empty Email or Password.");
    }

    if (emailError || passError) {
      return setLoginError('Please enter valid email or password.');
    }
    
    auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .catch(err => {
        if (err.code === 'auth/user-not-found') {
          setLoginError('Not found email.');
        } else if (err.code === 'auth/too-many-requests') {
          setLoginError('Trying again after some delay would unblock.');
        } else {
          setLoginError('Wrong password.');
        }
      });
  };

  const signInWithGoogle = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // sign in was cancelled
        console.log('cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation in progress already
        console.log('in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('play services not available or outdated');
      } else {
        console.log('Something went wrong:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="grey"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={handleEmailChange}
          />
        </View>

        {!(emailError === '') && (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>{emailError}</Text>
          </Animatable.View>
        )}

        <View style={styles.action}>
          <Feather name="lock" color={colors.text} size={20} />
          <TextInput
            placeholder="Mật khẩu"
            placeholderTextColor="grey"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={handlePasswordChange}
          />
        </View>

        {!(passError === '') && (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>{passError}</Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={styles.forgotPass}>Forgot password?</Text>
        </TouchableOpacity>
        {!(loginError === '') && (
          <Animatable.View animation="tada" duration={1000}>
            <Text style={[styles.errorMsg, styles.errPassMess]}>
              {loginError}
            </Text>
          </Animatable.View>
        )}
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={loginHandle}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text style={styles.textSignIn}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            style={[styles.signIn, styles.buttonSignUp]}>
            <Text style={styles.textSignUp}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <GoogleSigninButton
          style={{ width: '100%', height: 50 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signInWithGoogle}
        />
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
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
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
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
  textSignIn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  forgotPass: {
    color: '#009387',
    marginTop: 15,
  },
  buttonSignUp: {
    borderColor: '#009387',
    borderWidth: 1,
    marginTop: 15,
  },
  textSignUp: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#009387',
  },
});
