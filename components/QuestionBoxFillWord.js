import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const QuestionBoxFillWord = ({question, meanQuestion}) => {
  return (
    <View style={styles.top}>
      <Text style={styles.questions}>{question}</Text>
      <Text style={styles.meaning}>{meanQuestion}</Text>
    </View>
  );
};

export default QuestionBoxFillWord;

const styles = StyleSheet.create({
  top: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#99FFCC',
    borderRadius: 12,
    backgroundColor: '#CCFFCC',
    height: 100,
  },
  questions: {
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    textTransform: 'capitalize',
  },
});
