import React, {useEffect} from 'react';
import FourChoice from './FourChoice';
import QuestionBoxFillWord from './QuestionBoxFillWord';

const Grammar = ({navigation}) => {
  const question = {
    question: 'Tiger is stronger ... zebra',
    meanQuestion: 'Con sói hú vào lúc trăng tròn',
    ans: ['than', 'with', 'more', 'an'],
  };

  return (
    <FourChoice navigation={navigation} ans={question.ans}>
      <QuestionBoxFillWord
        question={question.question}
        meanQuestion={question.meanQuestion}
      />
    </FourChoice>
  );
};

export default Grammar;
