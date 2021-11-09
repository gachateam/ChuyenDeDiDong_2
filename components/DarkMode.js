import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {EventRegister} from 'react-native-event-listeners';
import themeContext from './config/themeContext';
import theme from './config/themeContext';


const DarkMode = () => {
    const [mode, setMode] = useState(false);

    useEffect(()=>{
        let darkMode = EventRegister.addEventListener("ChangeTheme",(data)=>{
            setMode(data);
        });
        return()=>{
            EventRegister.removeEventListener(darkMode);
        };
        
    });
    return(
        <themeContext.Provider value = {mode === true ? theme.dark : theme.light}>
        </themeContext.Provider>
    )
}

