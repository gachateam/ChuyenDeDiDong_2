import React from 'react';
import {createContext, useContext, useReducer} from 'react';
import reducers from './Reducer';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({children}) => {
  const initialState = {
    user: null,
    signinAnonymous: true,
  };
  const [state, dispatch] = useReducer(reducers, initialState);
  const {user, signinAnonymous} = state;
  const value = {
    dispatch,
    user,
    signinAnonymous,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
