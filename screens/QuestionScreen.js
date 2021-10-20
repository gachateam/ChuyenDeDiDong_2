import React from 'react';
import {useGlobal} from '../context/GlobalContext';
import {TYPE_QUESTION} from './../context/TypeQuestion';
import Image4 from './../components/Image4';
import Vocabulary4 from '../components/Vocabulary4';

const QuestionScreen = ({navigation}) => {
  const {typeQuestion} = useGlobal();

  switch (typeQuestion) {
    case TYPE_QUESTION.IMAGE_4:
      return <Image4 />;
    case TYPE_QUESTION.VOCABULARY_4:
      return <Vocabulary4 />;
    default:
      break;
  }
};

export default QuestionScreen;
