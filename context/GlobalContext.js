import React from 'react';
import {createContext, useContext, useReducer} from 'react';
import reducers from './Reducer';

export const GlobalContext = createContext();

export const useGlobal = () => {
  return useContext(GlobalContext);
};

const GlobalContextProvider = ({children}) => {
  const initialState = {title: ''};
  const [state, dispatch] = useReducer(reducers, initialState);
  const {title} = state;
  const value = {
    dispatch,
    title,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
