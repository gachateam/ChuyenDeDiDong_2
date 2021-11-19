import React from 'react';
import QuestionBoxFillWord from './QuestionBoxFillWord';
import FourChoice from './FourChoice';
import {useQuestion} from '../context/QuestionContext';
import {useGlobal} from '../context/GlobalContext';

const FillWord = ({navigation}) => {
  const {activeQuestion} = useQuestion();
  const {listQuestion} = useGlobal();

  const question = listQuestion[activeQuestion];

  return (
    <FourChoice navigation={navigation} ans={question.ans}>
      <QuestionBoxFillWord
        question={question.question}
        meanQuestion={question.meanQuestion}
      />
    </FourChoice>
  );
};

export default FillWord;
