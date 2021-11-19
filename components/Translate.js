import React from 'react';
import {useGlobal} from '../context/GlobalContext';
import {useQuestion} from '../context/QuestionContext';
import FourChoice from './FourChoice';
import QuestionBoxTranslate from './QuestionBoxTranslate';

const Translate = ({navigation}) => {
  const {activeQuestion} = useQuestion();
  const {listQuestion} = useGlobal();

  const question = listQuestion[activeQuestion];

  return (
    <FourChoice navigation={navigation} ans={question.ans}>
      <QuestionBoxTranslate question={question.question} />
    </FourChoice>
  );
};

export default Translate;
