import React from 'react';
import {useGlobal} from '../context/GlobalContext';
import {useQuestion} from '../context/QuestionContext';
import FourChoice from './FourChoice';
import QuestionBoxFillWord from './QuestionBoxFillWord';

const Grammar = ({navigation}) => {
  const {activeQuestion} = useQuestion();
  const {listQuestion} = useGlobal();

  const question = listQuestion[activeQuestion];

  const checkAns = (ansC, ans) => {
    return ansC.ansC === ans;
  };

  return (
    <FourChoice navigation={navigation} ans={question.ans} checkAns={checkAns}>
      <QuestionBoxFillWord
        question={question.question}
        meanQuestion={question.meanQuestion}
      />
    </FourChoice>
  );
};

export default Grammar;
