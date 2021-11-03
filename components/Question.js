import React from 'react';
import {useQuestion} from '../context/QuestionContext';
import Image4 from './Image4';
import Vocabulary4 from './Vocabulary4';
import Read from './Read';
import {TYPE_QUESTION} from './../context/TypeQuestion';

const Question = ({navigation}) => {
  const {typeQuestion} = useQuestion();

  switch (typeQuestion) {
    case TYPE_QUESTION.IMAGE_4:
      return <Image4 navigation={navigation} />;
    case TYPE_QUESTION.VOCABULARY_4:
      return <Vocabulary4 navigation={navigation} />;
    case TYPE_QUESTION.READ:
      return <Read navigation={navigation} />;
    default:
      break;
  }
};

export default Question;
