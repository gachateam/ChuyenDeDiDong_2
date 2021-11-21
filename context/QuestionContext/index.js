import React from 'react';
import {createContext, useContext, useReducer} from 'react';
import reducers from './Reducer';
import {TYPE_QUESTION} from './../TypeQuestion';

export const QuestionContext = createContext();

export const useQuestion = () => {
  return useContext(QuestionContext);
};

const QuestionContextProvider = ({children}) => {
  const initialState = {
    typeQuestion: TYPE_QUESTION.GRAMMAR,
    ansChoice: [],
    activeQuestion: 0,
    questionIncorrect:[],
    ansQuestionIncorrect: false
  };
  const [state, dispatch] = useReducer(reducers, initialState);
  const {typeQuestion, ansChoice, activeQuestion,questionIncorrect,ansQuestionIncorrect} = state;
  const value = {
    dispatch,
    typeQuestion,
    ansChoice,
    activeQuestion,
    questionIncorrect,
    ansQuestionIncorrect
  };
  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionContextProvider;