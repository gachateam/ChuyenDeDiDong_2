import React, { useEffect } from 'react';
import { useQuestion } from '../context/QuestionContext';
import Image4 from './Image4';
import Vocabulary4 from './Vocabulary4';
import Read from './Read';
import { TYPE_QUESTION } from './../context/TypeQuestion';
import Pronounciacion from './Pronounciacion';
import Listen from './Listen';
import Tts from 'react-native-tts';
import FillWord from './FillWord';
import Translate from './Translate';
import ChoiceMultiAnswer from './ChoiceMultiAnswer';
import Grammar from './Grammar';
import { useGlobal } from '../context/GlobalContext';
import { ACTIONS } from './../context/QuestionContext/Action';
import { BottomPopup } from './../screens/BottomPopup';


Tts.setDefaultLanguage('en');

const popupList = [
  {
    id: 1,
    name: 'Task',
  },
  {
    id: 2,
    name: 'Message',
  },
  {
    id: 3,
    name: 'Note',
  },
];

let popupRef = React.createRef();

const Question = ({ navigation }) => {
  const { typeQuestion, activeQuestion, dispatch } = useQuestion();
  const { listQuestion } = useGlobal();

  const onShowPopup = () => {
    popupRef.show();
  };
  const onClosePopup = () => {
    popupRef.close();
  };

  useEffect(() => {
    dispatch({
      type: ACTIONS.TYPE_QUESTION,
      payload: listQuestion[activeQuestion].type,
    });
  }, [activeQuestion, dispatch, listQuestion]);

  switch (typeQuestion) {
    case TYPE_QUESTION.IMAGE_4:
      return <>
        <Image4 onPress={onShowPopup} navigation={navigation} />

        <BottomPopup
          title="YOU đã chọn đúng , tiếp tục phát huy đi ...."
          ref={target => (popupRef = target)}
          onTouchOutside={onClosePopup}
          data={popupList}
        />

      </>;
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
