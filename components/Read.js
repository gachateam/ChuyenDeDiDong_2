import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Header from './Header';
import Tts from 'react-native-tts';
import QuestionBoxListen from './QuestionBoxListen';
import { useQuestion } from '../context/QuestionContext';
import { useGlobal } from '../context/GlobalContext';
import ButtonNext from './ButtonNext';
import Voice from '@react-native-community/voice';
import { ACTIONS } from './../context/QuestionContext/Action';


const Read = ({ navigation }) => {
  const { activeQuestion, dispatch } = useQuestion();
  const { listQuestion } = useGlobal();

  const [result, setResult] = useState()

  const question = listQuestion[activeQuestion];

  const checkAns = (ansC, ans) => {
    return ansC.question === ans;
  };

  const handleVoice = (tu) => {
    Tts.stop()
    Tts.speak(tu);
  };

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])

  const onSpeechStartHandler = (e) => {
    console.log('onSpeechStart: ', e);
  };

  const onSpeechEndHandler = (e) => {
    console.log('onSpeechEnd: ', e);
  };

  const onSpeechResultsHandler = (e) => {
    console.log('onSpeechResults: ', e);
    setResult(e.value[0])
    dispatch({ type: ACTIONS.CHOICE_ANS, payload: e.value[0] });
  };

  const startRecognizing = async () => {
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <QuestionBoxListen meanQuestion={question.question} />

      <TouchableOpacity style={styles.listen} onPress={() => handleVoice(question.question)}>
        <Image
          source={{
            uri: 'https://cdn.iconscout.com/icon/free/png-64/music-1128-1131524.png',
          }}
          style={styles.banner1}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.listen} onPress={startRecognizing}>
        <Image
          source={{
            uri: 'https://cdn.iconscout.com/icon/free/png-64/recording-voice-recognization-speech-audio-record-4-14005.png',
          }}
          style={styles.banner2}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.answer}>
        {result && <Text style={styles.answerText}>{result}</Text>}
      </View>
      <View style={styles.bottom}>
        <ButtonNext checkAns={checkAns} navigation={navigation} />
      </View>
    </View>
  );
};

export default Read;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    height: '100%',
  },
  banner1: {
    width: '25%',
    height: '25%',
  },
  banner2: {
    width: '15%',
    paddingVertical: 80,
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
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
  listen: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  answer: {
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
  answerText: {
    textTransform: 'capitalize'
  }
});
