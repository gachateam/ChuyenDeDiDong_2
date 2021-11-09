import React from 'react';
import { useQuestion } from '../context/QuestionContext';
import Image4 from './Image4';
import Vocabulary4 from './Vocabulary4';
import Read from './Read';
import { TYPE_QUESTION } from './../context/TypeQuestion';
import Sound from './Sound';
import Listen from './Listen';
import Tts from 'react-native-tts';
import FillWord from './FillWord';

Tts.setDefaultLanguage('en');

const Question = ({ navigation }) => {
  const { typeQuestion } = useQuestion();

  switch (typeQuestion) {
    case TYPE_QUESTION.IMAGE_4:
      return <Image4 navigation={navigation} />;
    case TYPE_QUESTION.VOCABULARY_4:
      return <Vocabulary4 navigation={navigation} />;
    case TYPE_QUESTION.READ:
      return <Read navigation={navigation} />;
    case TYPE_QUESTION.LISTEN:
      return <Listen navigation={navigation} />;
    case TYPE_QUESTION.FILLWORD:
      return <FillWord navigation={navigation} />;
    case TYPE_QUESTION.PRONOUNCIACION:
      return <Sound navigation={navigation} />;
    default:
      break;
  }
};

export default Question;
