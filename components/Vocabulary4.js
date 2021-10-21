import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';

const Vocabulary4 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={{
            uri: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/question-answer-2100724-1765054.png',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
        <Text style={styles.questions}>Questions</Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Option 4</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>KIỂM TRA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Vocabulary4;
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
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
  banner: {
    height: 40,
    width: 100,
    right: 150,
  },
  options: {
    marginVertical: 5,
    flex: 1,
    marginHorizontal: 10,
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
  },
  option: {
    fontSize: 20,
    fontWeight: '300',
    color: 'black',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 10,
    backgroundColor: 'white',
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#99FFFF',
  },
});
