import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { useQuestion } from '../context/QuestionContext';
import Header from './Header';
import { ACTIONS } from './../context/QuestionContext/Action';

const height = Dimensions.get('screen').height;

const Image4 = ({ navigation }) => {
  const { ansChoice, dispatch } = useQuestion()

  const question = {
    question: 'đâu là "con chó"',
    ans: ['cat', 'dog', 'ant', 'fish'],
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.top}>
        <Text style={styles.questions}>{question.question}</Text>
      </View>
      <View style={styles.options}>
        {question.ans.map((e, i) => {
          const hanldePress = () => {
            dispatch({ type: ACTIONS.CHOICE_ANS, payload: i + 1 })
          };

          return (
            <TouchableOpacity
              onPress={hanldePress}
              style={[
                styles.optionButton,
                ansChoice === i + 1 ? styles.choice : null,
              ]}
              key={i}>
              <Image
                source={{
                  uri: 'https://cdni.iconscout.com/illustration/premium/thumb/dog-holding-bone-in-mouth-4238889-3518614.png',
                }}
                style={styles.banner}
                resizeMode="contain"
              />
              <Text style={styles.option}>{e}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>KIỂM TRA</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Image4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  choice: {
    backgroundColor: '#0099FF',
  },
  top: {
    marginVertical: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#99FFCC',
    borderRadius: 12,
    backgroundColor: '#CCFFCC',
    height: 70,
  },
  questions: {
    fontSize: 28,
    textTransform: 'capitalize',
  },
  banner: {
    height: height / 4,
    width: 171,
  },
  options: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'auto',
    textTransform: 'capitalize',
  },
  optionButton: {
    borderRadius: 5,
    textAlign: 'center',
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#99FFFF',
  },
  bottom: {
    marginBottom: 12,
    marginVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    backgroundColor: '#3399CC',
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
});
