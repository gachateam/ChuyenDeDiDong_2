import React from 'react';
import { useGlobal } from '../context/GlobalContext';
import { useQuestion } from '../context/QuestionContext';
import FourChoice from './FourChoice';
import QuestionBoxPronounciation from './QuestionBoxPronounciation';

const Pronounciacion = ({navigation}) => {
  const {activeQuestion} = useQuestion();
  const { listQuestion} = useGlobal();

  const question = listQuestion[activeQuestion]
  
  return (
    <FourChoice navigation={navigation} ans={question.ans} speak={true}>
      <QuestionBoxPronounciation describe={question.describe} />
    </FourChoice>
  );
};

export default Pronounciacion;
