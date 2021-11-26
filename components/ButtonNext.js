import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useGlobal } from '../context/GlobalContext';
import { useQuestion } from '../context/QuestionContext';
import { BottomPopup } from '../screens/BottomPopup';
import { ACTIONS } from './../context/QuestionContext/Action';
import { TYPE_QUESTION } from './../context/TypeQuestion';
import Question from './Question';
import { Alert } from 'react-native';

const ButtonNext = ({ checkAns }) => {
  const { dispatch, activeQuestion, ansChoice, questionIncorrect, ansQuestionIncorrect, typeQuestion } = useQuestion();
  const { listQuestion } = useGlobal();

  const handleNextQuestion = () => {
    if (ansQuestionIncorrect) {
      if (!(typeof ansChoice == 'object' && ansChoice.length === 0)) {
        if (!checkAns(listQuestion[activeQuestion], ansChoice)) {
          dispatch({ type: ACTIONS.INCORRECT, payload: activeQuestion });
        }else{
          Alert.alert(
            "Thông báo!",
            "Sai",
            [
                { text: "ukm" }
            ] 
        );
            }

        if (questionIncorrect.length != 0) {
          const next = questionIncorrect.shift()
          dispatch({ type: ACTIONS.NEXT_QUESTION, payload: next });
        }
      } else if (typeQuestion == TYPE_QUESTION.READ && questionIncorrect.length != 0) {
        const next = questionIncorrect.shift()
        dispatch({ type: ACTIONS.NEXT_QUESTION, payload: next });
      }else{
        Alert.alert(
          "Thông báo!",
          "Đúng r?i",
          [
              { text: "ukm" }
          ] 
      );
          }

    } else {
      if (listQuestion.length > activeQuestion + 1) {
        if (!(typeof ansChoice == 'object' && ansChoice.length === 0)) {
          if (!checkAns(listQuestion[activeQuestion], ansChoice)) {
            dispatch({ type: ACTIONS.INCORRECT, payload: activeQuestion });
          } 

          dispatch({ type: ACTIONS.NEXT_QUESTION, payload: activeQuestion + 1 });
        } else if (typeQuestion == TYPE_QUESTION.READ) {
          dispatch({ type: ACTIONS.NEXT_QUESTION, payload: activeQuestion + 1 });
        }
        if (listQuestion.length <= activeQuestion + 2) {
          dispatch({ type: ACTIONS.ANS_QUESTION_INCORRECT, payload: true });
        }
      }
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleNextQuestion}>
      <Text style={styles.buttonText}>
        {typeQuestion === TYPE_QUESTION.READ && (typeof ansChoice == 'object' && ansChoice.length === 0) ? 'BỎ QUA' : 'KIỂM TRA'}
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
    showPopup: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

});
