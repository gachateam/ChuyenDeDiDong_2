import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {stylesQuestionBox} from './../style/QuestionBoxStyle';

const QuestionBoxPronounciation = ({describe}) => {
  return (
    <View style={styles.top}>
      <View style={stylesQuestionBox.textBox}>
        <Text style={stylesQuestionBox.questions}>{describe}</Text>
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
});
