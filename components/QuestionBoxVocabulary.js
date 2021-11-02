import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const QuestionBoxVocabulary = ({question}) => {
    return (
        <View style={styles.top}>
            <Image
                source={{
                    uri: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/question-answer-2100724-1765054.png',
                }}
                style={styles.banner}
                resizeMode="contain"
            />
            <Text style={styles.questions}>{question}</Text>
        </View>
    )
}

export default QuestionBoxVocabulary

const styles = StyleSheet.create({
    top: {
        marginVertical: 20,
        backgroundColor: '#CCFFCC',
        height: 100,
        alignItems: 'center',
        paddingHorizontal: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#99FFCC',
    },
    banner: {
        height: 40,
        width: 100,
        right: 150,
    },
    questions: {
        fontSize: 28,
        textAlign: 'center',
        alignItems: 'center',
        textTransform: 'capitalize',
    },
})
