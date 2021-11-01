import React from 'react';
import QuestionContextProvider from './../context/QuestionContext/index';
import Question from './../components/Question';

const QuestionScreen = ({ navigation }) => {
  return (
    <QuestionContextProvider>
      <Question navigation={navigation}/>
    </QuestionContextProvider>
  )
};

export default QuestionScreen;
