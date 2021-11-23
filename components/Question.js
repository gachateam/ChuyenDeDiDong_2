import React, {useEffect} from 'react';
import {useQuestion} from '../context/QuestionContext';
import Image4 from './Image4';
import Vocabulary4 from './Vocabulary4';
import Read from './Read';
import {TYPE_QUESTION} from './../context/TypeQuestion';
import Pronounciacion from './Pronounciacion';
import Listen from './Listen';
import Tts from 'react-native-tts';
import FillWord from './FillWord';
import Translate from './Translate';
import ChoiceMultiAnswer from './ChoiceMultiAnswer';
import Grammar from './Grammar';
import {useGlobal} from '../context/GlobalContext';
import {ACTIONS} from './../context/QuestionContext/Action';

Tts.setDefaultLanguage('en');

const Question = ({navigation}) => {
  const {typeQuestion, activeQuestion, dispatch} = useQuestion();
  const {listQuestion} = useGlobal();

  useEffect(() => {
    dispatch({
      type: ACTIONS.TYPE_QUESTION,
      payload: listQuestion[activeQuestion].type,
    });
  }, [activeQuestion, dispatch, listQuestion]);

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
    case TYPE_QUESTION.TRANSLATE:
      return <Translate navigation={navigation} />;
    case TYPE_QUESTION.PRONOUNCIACION:
      return <Pronounciacion navigation={navigation} />;
    case TYPE_QUESTION.CHOICE_MULTI_ANSWER:
      return <ChoiceMultiAnswer navigation={navigation} />;
    case TYPE_QUESTION.GRAMMAR:
      return <Grammar navigation={navigation} />;
    default:
      break;
  }
};

export default Question;
