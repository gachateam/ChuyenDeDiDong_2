import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from './Header';
import {useQuestion} from '../context/QuestionContext';
import {ACTIONS} from './../context/QuestionContext/Action';
import QuestionBoxFillWord from './QuestionBoxFillWord';
import ButtonNext from './ButtonNext';

const ChoiceMultiAnswer = ({navigation}) => {
  const {ansChoice, dispatch,activeQuestion} = useQuestion();
  const { listQuestion } = useGlobal();

  const question = listQuestion[activeQuestion];

  const checkAns = (ansC, ans) => {
    let check = true

    if (ansC.ansC.length != ans.length) {
        check = false
    }

    ans.filter((val) => {
        if (!ansC.ansC.includes(val)) {
            check = false
            return
        }
    })

    return check
}

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <QuestionBoxFillWord
        question={question.question}
        meanQuestion={question.meanQuestion}
      />

      <View style={styles.options}>
        {question.ans.map((e, i) => {
          const hanldePress = () => {
            dispatch({
              type: ACTIONS.CHOICE_ANS,
              payload: ansChoice.includes(i + 1)
                ? ansChoice.filter(item => item !== i + 1)
                : ansChoice.concat(i + 1),
            });
          };

          return (
            <TouchableOpacity
              onPress={hanldePress}
              style={[
                styles.optionButton,
                ansChoice.includes(i + 1) ? styles.choice : null,
              ]}
              key={i}>
              <Text style={styles.option}>{e}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.bottom}>
        <ButtonNext checkAns={checkAns}/>
      </View>
    </View>
  );
};

export default ChoiceMultiAnswer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
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
  choice: {
    backgroundColor: '#0099FF',
  },
  banner: {
    height: 40,
    width: 100,
    right: 150,
  },
  bottom: {
    marginBottom: 5,
    marginVertical: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
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
  questions: {
    fontSize: 28,
    textAlign: 'center',
    alignItems: 'center',
    textTransform: 'capitalize',
  },
  options: {
    fontSize: 20,
    color: 'black',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  optionButton: {
    padding: 12,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#99FFFF',
    marginHorizontal: 10,
  },
});
