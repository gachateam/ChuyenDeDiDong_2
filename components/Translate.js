import React from 'react';
import {useGlobal} from '../context/GlobalContext';
import {useQuestion} from '../context/QuestionContext';
import FourChoice from './FourChoice';
import QuestionBoxTranslate from './QuestionBoxTranslate';

const Translate = ({navigation}) => {
  const {activeQuestion} = useQuestion();
  const {listQuestion} = useGlobal();

  const question = listQuestion[activeQuestion];

  const checkAns = (ansC, ans) => {
    return ansC === ans
  }

  return (
    <FourChoice navigation={navigation} ans={question.ans} checkAns={checkAns}>
      <QuestionBoxTranslate question={question.question} />
    </FourChoice>
  );
};

export default Translate;
