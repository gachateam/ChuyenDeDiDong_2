import React from 'react';
import QuestionBoxVocabulary from './QuestionBoxVocabulary';
import FourChoice from './FourChoice';
import {useQuestion} from '../context/QuestionContext';
import {useGlobal} from '../context/GlobalContext';

const Vocabulary4 = ({navigation}) => {
  const {activeQuestion} = useQuestion();
  const {listQuestion} = useGlobal();

  const question = listQuestion[activeQuestion];

  return (
    <FourChoice navigation={navigation} ans={question.ans}>
      <QuestionBoxVocabulary question={question.question} />
    </FourChoice>
  );
};

export default Vocabulary4;
