import React from 'react';
import QuestionBoxListen from './QuestionBoxListen';
import FourChoice from './FourChoice';

const Listen = ({ navigation }) => {
  const question = {
    question: "bee",
    meanQuestion: "con ong",
    ans: [
      "mouse",
      "fly",
      "ant",
      "bee"
    ],
  };

  return (
    <FourChoice navigation={navigation} ans={question.ans}>
      <QuestionBoxListen question={question.question} meanQuestion={question.meanQuestion} />
    </FourChoice>
  );
};

export default Listen;
