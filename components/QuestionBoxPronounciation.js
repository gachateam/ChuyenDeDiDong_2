import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const QuestionBoxPronounciation = ({describe}) => {
  return (
    <View style={styles.top}>
      <View style={styles.textBox}>
        <Text style={styles.questions}>{describe}</Text>
      </View>
    </View>
  );
};

export default QuestionBoxPronounciation;

const styles = StyleSheet.create({
  top: {
    marginVertical: 20,
    backgroundColor: '#CCFFCC',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#99FFCC',
    flexDirection: 'row',
  },
  questions: {
    fontSize: 24,
    textAlign: 'center',
    alignItems: 'center',
    textTransform: 'capitalize',
  },
  textBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
