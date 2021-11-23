import React from 'react';
import QuestionBoxListen from './QuestionBoxListen';
import FourChoice from './FourChoice';
import {useQuestion} from '../context/QuestionContext';
import {useGlobal} from '../context/GlobalContext';

const Listen = ({navigation}) => {
  const {activeQuestion} = useQuestion();
  const {listQuestion} = useGlobal();

  const question = listQuestion[activeQuestion];

  const checkAns = (ansC, ans) => {
    return ansC.ansC === ans
  }

  return (
    <FourChoice navigation={navigation} ans={question.ans} checkAns={checkAns}>
      <QuestionBoxListen
        question={question.question}
        meanQuestion={question.meanQuestion}
      />
    </FourChoice>
  );
};

export default Listen;
