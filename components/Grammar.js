import React, {useEffect} from 'react';
import FourChoice from './FourChoice';
import QuestionBoxFillWord from './QuestionBoxFillWord';
import {firebase} from '@react-native-firebase/database';

const Grammar = ({navigation}) => {
  useEffect(() => {
    const database = firebase
      .app()
      .database(
        'https://englishlearning-ec586-default-rtdb.asia-southeast1.firebasedatabase.app/',
      )
      .ref('/category/animal/easy/question/stage1/unit')
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
      });
  }, []);

  const question = {
    question: 'Tiger is stronger ... zebra',
    meanQuestion: 'Con sói hú vào lúc trăng tròn',
    ans: ['than', 'with', 'more', 'an'],
  };

  return (
    <FourChoice navigation={navigation} ans={question.ans}>
      <QuestionBoxFillWord
        question={question.question}
        meanQuestion={question.meanQuestion}
      />
    </FourChoice>
  );
};

export default Grammar;
