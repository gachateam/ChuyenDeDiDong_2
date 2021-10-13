import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';

const QuestionScreen = ({navigation}) => {
  return (
    <View style ={styles.container}>
        <View style={styles.top}>
            <Text style={styles.questions}>Questions</Text>
        </View>

      <View style ={styles.options}>
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
          <Text style={styles.buttonText}>PREVIOUS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress ={() => navigation.navigate('QuestionScreen')} style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress ={() => navigation.navigate('Home')} style={styles.button}>
          <Text style={styles.buttonText}>QUIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuestionScreen;
const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
    top:{
        marginVertical: 16,
    },
    options:{
        marginVertical: 16,
        flex: 1
    },
    bottom: {
        marginBottom: 12,
        marginVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    button:{
        backgroundColor: '#3399CC',
        padding: 16,
        borderRadius:5,
        alignItems: 'center',
        marginBottom: 30,   
        textAlign: 'center'
    },
    buttonText:{
        fontSize: 18,
        fontWeight: '400',
        color: 'white'
    },
    questions:{
        fontSize: 28,
    },
    option:{
        fontSize: 20,
        fontWeight: '500',
        color: 'white'
    },
    optionButton:{
        paddingVertical: 12,
        marginVertical: 16,
        backgroundColor: '#6699CC',
        paddingHorizontal: 12,
        borderRadius: 12,
    }
});
