import React from 'react';
import { createContext, useContext, useReducer } from 'react';
import reducers from './Reducer';

export const GlobalContext = createContext();

export const useGlobal = () => {
  return useContext(GlobalContext);
};

const GlobalContextProvider = ({ children }) => {
  const initialState = { title: '', typeQuestion: '4image', hideTabBar: false };
  const [state, dispatch] = useReducer(reducers, initialState);
  const { title, typeQuestion, hideTabBar } = state;
  const value = {
    dispatch,
    title,
    typeQuestion,
    hideTabBar
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
