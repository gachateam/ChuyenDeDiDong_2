import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Header from './Header';
import {ACTIONS} from './../context/QuestionContext/Action';
import {useQuestion} from '../context/QuestionContext';
import {useGlobal} from '../context/GlobalContext';
import ButtonNext from './ButtonNext';

const height = Dimensions.get('screen').height;

const Image4 = ({navigation}) => {
  const {ansChoice, dispatch, activeQuestion} = useQuestion();
  const {listQuestion, vocabulary} = useGlobal();

  const question = listQuestion[activeQuestion];

  const checkAns = (ansC, ans) => {
    return ansC.ansC === ans;
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
            dispatch({type: ACTIONS.CHOICE_ANS, payload: i + 1});
          };

          return (
            <TouchableOpacity
              onPress={hanldePress}
              style={[
                styles.optionButton,
                ansChoice === i + 1 ? styles.choice : null,
              ]}
              key={i}
            >
              <Image
                source={{
                  uri: vocabulary.find(value => value.word === e).image,
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
        <ButtonNext checkAns={checkAns} navigation={navigation} />
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
    width: '49%',
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
  review: {
    paddingTop: 5,
    alignItems: 'flex-end',
    flexDirection: 'row-reverse',
  },
});
