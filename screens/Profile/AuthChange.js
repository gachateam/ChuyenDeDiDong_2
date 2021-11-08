import React from 'react';

import auth from '@react-native-firebase/auth';
import StackProfileScreen from './StackProfileScreen';
import StackScreen from './StackScreen';

const AuthChange = () => {
  const [user, setUser] = React.useState(null);

  auth().onAuthStateChanged(u => setUser(u));

  return user ? <StackProfileScreen /> : <StackScreen />;
};

export default AuthChange;
