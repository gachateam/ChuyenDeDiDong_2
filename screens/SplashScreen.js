import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Quizlet</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('QuestionScreen')}
        style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SplashScreen;
const styles = StyleSheet.create({
  banner: {
    height: 450,
    width: 450,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#3399CC',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  titleText: {
    fontSize: 30,
    fontWeight: '600',
  },
  title: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
