import React from 'react';

import StackProfileScreen from './StackProfileScreen';
import StackScreen from './StackScreen';
import {useAuth} from '../../context/AuthContext';

const AuthChange = () => {
  const {user} = useAuth();

  return user && !user.isAnonymous ? <StackProfileScreen /> : <StackScreen />;
};

export default AuthChange;
