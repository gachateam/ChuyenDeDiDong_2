import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const QuestionBoxListen = ({question}) => {
    return (
    <View>
      <View style={styles.top}>
      <Text style={styles.questions}>{question}</Text>
        <Text style={styles.meaning}>The meaning of the question</Text>
      </View>
    </View>
    
    )
}

export default QuestionBoxListen

const styles = StyleSheet.create({
    top: {
        marginVertical: 15,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#99FFCC',
        borderRadius: 12,
        backgroundColor: '#CCFFCC',
        height: 100,
    },
    questions: {
        fontSize: 28,
        textAlign: 'center',
        alignItems: 'center',
        textTransform: 'capitalize',
      },
})
