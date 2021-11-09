import React from 'react';
import QuestionBoxVocabulary from './QuestionBoxVocabulary';
import FourChoice from './FourChoice';

const Vocabulary4 = ({navigation}) => {
  const question = {
    question: 'dịch "con chuột"',
    ans: ['cat', 'mouse', 'ant', 'fish'],
  };

  return (
    <FourChoice navigation={navigation} ans={question.ans}>
      <QuestionBoxVocabulary question={question.question} />
    </FourChoice>
  );
};

export default Vocabulary4;
