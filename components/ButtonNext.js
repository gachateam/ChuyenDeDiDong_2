import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useGlobal} from '../context/GlobalContext';
import {useQuestion} from '../context/QuestionContext';
import {ACTIONS} from './../context/QuestionContext/Action';
import {TYPE_QUESTION} from './../context/TypeQuestion';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {ACTIONS as ACTIONS_GLOBAL} from './../context/Action';

const ButtonNext = ({checkAns, navigation}) => {
  const {
    dispatch,
    activeQuestion,
    ansChoice,
    questionIncorrect,
    ansQuestionIncorrect,
    typeQuestion,
  } = useQuestion();
  const {listQuestion, unit, stage, title, hideTabBar} = useGlobal();

  const handleNextQuestion = () => {
    if (ansQuestionIncorrect) {
      if (!(typeof ansChoice === 'object' && ansChoice.length === 0)) {
        if (!checkAns(listQuestion[activeQuestion], ansChoice)) {
          dispatch({type: ACTIONS.INCORRECT, payload: activeQuestion});
        }
        if (questionIncorrect.length !== 0) {
          const next = questionIncorrect.shift();
          dispatch({type: ACTIONS.NEXT_QUESTION, payload: next});//chuyển đến câu hỏi sai tiếp theo
        }
      } else if (
        typeQuestion === TYPE_QUESTION.READ &&
        questionIncorrect.length !== 0
      ) {//bỏ qua câu hỏi đọc
        const next = questionIncorrect.shift();
        dispatch({type: ACTIONS.NEXT_QUESTION, payload: next});//lấy câu hỏi đầu tiên trong list câu hỏi sai
      }
      if (questionIncorrect.length === 0 && unit.compare(stage) === 0) {
        //update stage in firestore
        firestore()
          .collection('users/' + auth().currentUser.uid + '/category')
          .doc(title)
          .update(unit.nextStage())
          .then(() => {
            console.log('User updated!');
          });

        // trở về màn hình chính
        dispatch({type: ACTIONS_GLOBAL.HIDE_TAB_BAR, payload: !hideTabBar});
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'StageScreen',
            },
          ],
        });
      }
    } else {
      if (listQuestion.length > activeQuestion + 1) {
        if (!(typeof ansChoice === 'object' && ansChoice.length === 0)) {//check người dụng có chọn đáp án chưa
          if (!checkAns(listQuestion[activeQuestion], ansChoice)) {//check câu trả lời người dùng
            dispatch({type: ACTIONS.INCORRECT, payload: activeQuestion});//set người dùng trả lời sai
          }
          dispatch({type: ACTIONS.NEXT_QUESTION, payload: activeQuestion + 1});
        } else if (typeQuestion === TYPE_QUESTION.READ) {//bỏ qua câu hỏi đọc
          dispatch({type: ACTIONS.NEXT_QUESTION, payload: activeQuestion + 1});//next question
        }
        if (listQuestion.length <= activeQuestion + 2) {//bắt đầu làm lại câu hỏi sai
          dispatch({type: ACTIONS.ANS_QUESTION_INCORRECT, payload: true});
        }
      }
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleNextQuestion}>
      <Text style={styles.buttonText}>
        {typeQuestion === TYPE_QUESTION.READ &&
        typeof ansChoice === 'object' &&
        ansChoice.length === 0
          ? 'BỎ QUA'
          : 'KIỂM TRA'}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonNext;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3399CC',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 30,
    textAlign: 'center',
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
});
