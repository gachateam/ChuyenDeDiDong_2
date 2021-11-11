import React from 'react';
import FourChoice from './FourChoice';
import QuestionBoxFillWord from './QuestionBoxFillWord';
import database from '@react-native-firebase/database';

const Grammar = ({ navigation }) => {

    database()
        .ref('/category/animal/easy/question/stage1/unit/')
        .on('value', snapshot => {
            console.log('User data: ', snapshot.val());
        });
        
    const question = {
        question: "Tiger is stronger ... zebra",
        meanQuestion: "Con sói hú vào lúc trăng tròn",
        ans: [
            "than",
            "with",
            "more",
            "an"
        ],
    };

    return (
        <FourChoice navigation={navigation} ans={question.ans}>
            <QuestionBoxFillWord question={question.question} meanQuestion={question.meanQuestion} />
        </FourChoice>
    );
};

export default Grammar;