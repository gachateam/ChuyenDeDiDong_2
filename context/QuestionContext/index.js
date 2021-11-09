import React from 'react';
import {createContext, useContext, useReducer} from 'react';
import reducers from './Reducer';

export const QuestionContext = createContext();

export const useQuestion = () => {
  return useContext(QuestionContext);
};

const QuestionContextProvider = ({children}) => {
  const initialState = {
    typeQuestion: 'translate',
    ansChoice: 0,
  };
  const [state, dispatch] = useReducer(reducers, initialState);
  const {typeQuestion, ansChoice} = state;
  const value = {
    dispatch,
    typeQuestion,
    ansChoice,
  };
  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionContextProvider;
