import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Tts from 'react-native-tts';
import {stylesQuestionBox} from './../style/QuestionBoxStyle';

const QuestionBoxListen = ({question, meanQuestion}) => {
  return (
    <View style={styles.top}>
      <AntDesign
        style={stylesQuestionBox.icon}
        name="sound"
        size={32}
        color="blue"
        onPress={() => {
          Tts.stop();
          Tts.speak(question, {
            language: 'vi',
          });
        }}
      />
      <View style={stylesQuestionBox.textBox}>
        <Text style={stylesQuestionBox.questions}>{meanQuestion}</Text>
      </View>
    </View>
  );
};

export default QuestionBoxListen;

const styles = StyleSheet.create({
  top: {
    marginVertical: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#99FFCC',
    borderRadius: 12,
    backgroundColor: '#CCFFCC',
    height: 100,
    flexDirection: 'row',
  },
});
