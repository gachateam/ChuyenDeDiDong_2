import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
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

  const checkAnsCorrect = () => {
    if (!checkAns(listQuestion[activeQuestion], ansChoice)) {
      dispatch({type: ACTIONS.INCORRECT, payload: activeQuestion});
      Alert.alert('Thông báo!', 'Sai rồi', [{text: 'ukm'}]);
    } else {
      Alert.alert('Thông báo!', 'Đúng rồi', [{text: 'ukm'}]);
    }
  };

  const updateState = () => {
    return firestore()
      .collection('users/' + auth().currentUser.uid + '/category')
      .doc(title)
      .set(unit.nextStage(), {merge: true})
      .then(() => {
        console.log('User updated!');
      });
  };

  const updateScore = async () => {
    let score = 0;
    await firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .get()
      .then(documentSnapshot => {
        score = documentSnapshot.data().score;
      });
    await firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .set(unit.getExp(score), {merge: true})
      .then(() => {
        console.log('User updated!');
      });
  };

  const handleNextQuestion = async () => {
    if (ansQuestionIncorrect) {
      if (!(typeof ansChoice === 'object' && ansChoice.length === 0)) {
        checkAnsCorrect(checkAns, listQuestion, activeQuestion, ansChoice);
        if (questionIncorrect.length !== 0) {
          const next = questionIncorrect.shift();
          dispatch({type: ACTIONS.NEXT_QUESTION, payload: next});
        }
      } else if (
        typeQuestion === TYPE_QUESTION.READ &&
        questionIncorrect.length !== 0
      ) {
        const next = questionIncorrect.shift();
        dispatch({type: ACTIONS.NEXT_QUESTION, payload: next});
      }
      if (questionIncorrect.length === 0 && unit.compare(stage) === 0) {
        await updateState();
        await updateScore();

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
        if (!(typeof ansChoice === 'object' && ansChoice.length === 0)) {
          checkAnsCorrect(checkAns, listQuestion, activeQuestion, ansChoice);
          dispatch({type: ACTIONS.NEXT_QUESTION, payload: activeQuestion + 1});
        } else if (typeQuestion === TYPE_QUESTION.READ) {
          dispatch({type: ACTIONS.NEXT_QUESTION, payload: activeQuestion + 1});
        }
        if (listQuestion.length <= activeQuestion + 2) {
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
  showPopup: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
