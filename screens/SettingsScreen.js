import React, {useState, useContext} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { ScrollView, Switch } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {EventRegister} from 'react-native-event-listeners';
import themeContext from "../config/themeContext";





const SettingsScreen = () => {
  const theme = useContext(themeContext);
  const [mode,setMode] = useState(false);
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]} >
      <View style={styles.top}>
        <Text style={styles.txtTitle}>Settings</Text>
      </View>
       <ScrollView style = {styles.SelectionView}>
            <TouchableOpacity  style={styles.Selection}>
            <Text style={styles.text}><Icon style ={styles.icon} name="home" size={30}/>   My Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Selection}>
              <Text style={styles.text}><Icon style ={styles.icon} name="home" size={30}/>   Account</Text>
            </TouchableOpacity>
            <View style={styles.Selection}>
              <View style={styles.preference}> 
              <Text style={styles.text}><Icon name="home" size={30}/>  Dark Theme </Text> 
                                <TouchableOpacity>
                                    <Switch value = {mode}
                                    onValueChange = {(value) =>{
                                      setMode(value);  
                                      EventRegister.emit("ChangeTheme",value);
                                    }}             
                                    />
                                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={styles.Selection}>
              <Text style={styles.text}><Icon style ={styles.icon} name="home" size={30}/>   Language</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.Selection}>
              <Text style={styles.text}><Icon style ={styles.icon} name="home" size={30}/>   LogOut</Text>
            </TouchableOpacity>
       </ScrollView>

    </View>
  );
};
export default SettingsScreen;
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
    color: theme.color,
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
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

});


