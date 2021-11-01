import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, PointPropType} from 'react-native';
import Tts from 'react-native-tts';

const handleVoice = () => {
  Tts.speak('Hello everybody');
};
const Read = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.questions}>Questions</Text>
        <Text style={styles.meaning}>The meaning of the question</Text>
      </View>
      
      <TouchableOpacity style={styles.listen} onPress={() => handleVoice()}> 
        <Image
          source={{
            uri: 'https://cdn.iconscout.com/icon/free/png-64/music-1128-1131524.png',
          }}
          style={styles.banner1}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.bannerbottom}>
        <TouchableOpacity style={styles.listen}>
          <Image
            source={{
              uri: 'https://cdn.iconscout.com/icon/free/png-64/recording-voice-recognization-speech-audio-record-4-14005.png',
            }}
            style={styles.banner2}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style ={styles.answer}>
        <Text style={styles.answertext}>Answer</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>KIỂM TRA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Read;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    height: '100%',
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
    height: 100,
  },
  questions: {
    fontSize: 28,
  },
  banner1: {
    height: 70,
    width: 60,
  },
  banner2: {
    width: 70,
    paddingTop: 280,
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
  bannerbottom: {
    borderRadius: 50,
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
  }
});
