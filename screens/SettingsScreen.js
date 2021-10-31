import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.txtTitle}>Settings</Text>
      </View>
       <ScrollView style = {styles.SelectionView}>
            <TouchableOpacity style={styles.Selection}>
              <Text style={styles.text}>My Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Selection}>
              <Text style={styles.text}>Account</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.Selection}>
              <Text style={styles.text}>Dark Mode</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Selection}>
              <Text style={styles.text}>Language</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Selection}>
              <Text style={styles.text}>LogOut</Text>
            </TouchableOpacity>
       </ScrollView>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  txtTitle: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  top: {
    marginVertical: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  text: {
    fontSize: 20,
  },
  SelectionView: {
    backgroundColor:color.grey,
    height: 0.5,
  }, 
  Selection: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  }

});

export default SettingsScreen;
