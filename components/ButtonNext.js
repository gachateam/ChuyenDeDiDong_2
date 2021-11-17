import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useGlobal } from '../context/GlobalContext';
import { useQuestion } from '../context/QuestionContext';
import { ACTIONS } from './../context/QuestionContext/Action';

const ButtonNext = () => {
    const { dispatch, activeQuestion } = useQuestion();
    const { listQuestion } = useGlobal();

    const handleNextQuestion = () => {
        if (listQuestion.length > activeQuestion + 1) {
            console.log(listQuestion.length);
            console.log(activeQuestion + 1);
            dispatch({ type: ACTIONS.NEXT_QUESTION })
        }
    }

    return (
        <TouchableOpacity style={styles.button} onPress={handleNextQuestion}>
            <Text style={styles.buttonText}>{listQuestion.length > activeQuestion + 1 ? "KIỂM TRA" : "HOÀN TẤT"}</Text>
        </TouchableOpacity>
    )
}

export default ButtonNext

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
})
