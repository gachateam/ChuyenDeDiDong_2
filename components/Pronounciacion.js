import React from 'react';
import {useGlobal} from '../context/GlobalContext';
import {useQuestion} from '../context/QuestionContext';
import FourChoice from './FourChoice';
import QuestionBoxPronounciation from './QuestionBoxPronounciation';

const Pronounciacion = ({navigation}) => {
  const {activeQuestion} = useQuestion();
  const {listQuestion} = useGlobal();

  const question = listQuestion[activeQuestion];

  const checkAns = (ansC, ans) => {
    return ansC.ansC === ans;
  };

  return (
    <FourChoice
      navigation={navigation}
      ans={question.ans}
      speak={true}
      checkAns={checkAns}
    >
      <QuestionBoxPronounciation describe={question.describe} />
    </FourChoice>
  );
};

export default Pronounciacion;
