import React from 'react'
import QuestionBoxFillWord from './QuestionBoxFillWord';
import FourChoice from './FourChoice';

const FillWord = ({ navigation }) => {
    const question = {
        question: "The ... meowed",
        meanQuestion: "Con mèo kêu meo",
        ans: [
            "cat",
            "dog",
            "mouse",
            "fish"
        ],
    };

    return (
        <FourChoice navigation={navigation} ans={question.ans}>
            <QuestionBoxFillWord question={question.question} meanQuestion={question.meanQuestion} />
        </FourChoice>
    );
}

export default FillWord