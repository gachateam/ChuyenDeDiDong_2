import React from 'react';
import {createContext, useContext, useReducer} from 'react';
import reducers from './Reducer';

export const GlobalContext = createContext();

export const useGlobal = () => {
  return useContext(GlobalContext);
};

const GlobalContextProvider = ({children}) => {
  const initialState = {
    title: '',
    hideTabBar: false,
  };
  const [state, dispatch] = useReducer(reducers, initialState);
  const {title,  hideTabBar} = state;
  const value = {
    dispatch,
    title,
    hideTabBar,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
