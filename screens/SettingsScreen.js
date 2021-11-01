import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';
import AntDesign from 'react-native-vector-icons/AntDesign';




const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.txtTitle}>Settings</Text>
      </View>
       <ScrollView style = {styles.SelectionView}>
            <TouchableOpacity  style={styles.Selection}>
            <Text style={styles.text}><Icon style ={styles.icon} name="home" size={40}/>My Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Selection}>
              <Text style={styles.text}><Icon style ={styles.icon} name="user" size={30}/>  Account</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.Selection}>
              <Text style={styles.text}><AntDesign name="home" size={30}/>  Dark Mode</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Selection}>
              <Text style={styles.text}><Icon style ={styles.icon} name="home" size={30}/>  Language</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Selection}>
              <Text style={styles.text}><Icon style ={styles.icon} name="logout" size={30}/>  LogOut</Text>
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

  },
  icon: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    paddingLeft: 30,
  }

});

export default SettingsScreen;
