import React from 'react';
import QuestionBoxListen from './QuestionBoxListen';
import FourChoice from './FourChoice';
import {useQuestion} from '../context/QuestionContext';
import {useGlobal} from '../context/GlobalContext';

const Listen = ({navigation}) => {
  const {activeQuestion} = useQuestion();
  const {listQuestion} = useGlobal();

  const question = listQuestion[activeQuestion];

  return (
    <FourChoice navigation={navigation} ans={question.ans}>
      <QuestionBoxListen
        question={question.question}
        meanQuestion={question.meanQuestion}
      />
    </FourChoice>
  );
};

export default Listen;
