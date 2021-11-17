import React from 'react';
import {createContext, useContext, useReducer} from 'react';
import reducers from './Reducer';

export const GlobalContext = createContext();

export const useGlobal = () => {
  return useContext(GlobalContext);
};

const GlobalContextProvider = ({children}) => {
  const initialState = {
    title: 'read',
    hideTabBar: false,
    unit: null,
    listQuestion: null,
    vocabulary:null
  };
  const [state, dispatch] = useReducer(reducers, initialState);
  const {title, hideTabBar, unit, listQuestion,vocabulary} = state;
  const value = {
    dispatch,
    title,
    hideTabBar,
    unit,
    listQuestion, 
    vocabulary
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
