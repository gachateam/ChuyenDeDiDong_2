import React from 'react';
import {createContext, useContext, useReducer} from 'react';
import reducers from './Reducer';

export const GlobalContext = createContext();

export const useGlobal = () => {
  return useContext(GlobalContext);
};

const GlobalContextProvider = ({children}) => {
  const initialState = {title: '', typeQuestion: 'read'};
  const [state, dispatch] = useReducer(reducers, initialState);
  const {title, typeQuestion} = state;
  const value = {
    dispatch,
    title,
    typeQuestion,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
