import React from 'react';
import FourChoice from './FourChoice';
import QuestionBoxPronounciation from './QuestionBoxPronounciation';

const Pronounciacion = ({navigation}) => {
  const question = {
    describe: 'Từ nào có âm tiết khác với các từ còn lại',
    ans: ['wolf', 'monkey', 'giraffe', 'squirrel'],
  };

  return (
    <FourChoice navigation={navigation} ans={question.ans} speak={true}>
      <QuestionBoxPronounciation describe={question.describe} />
    </FourChoice>
  );
};

export default Pronounciacion;
