import React from 'react'
import FourChoice from './FourChoice';
import QuestionBoxTranslate from './QuestionBoxTranslate';

const Translate = ({ navigation }) => {

    const question = {
        type: "translate",
        question: "Bee give honey",
        ans: [
            "Con vẹt cho mật ong",
            "Con cá cho mật ong",
            "Con ong cho mật ong",
            "Con kiến cho mật ong"
        ],
    }

    return (
        <FourChoice navigation={navigation} ans={question.ans}>
            <QuestionBoxTranslate question={question.question} />
        </FourChoice>
    )
}

export default Translate
