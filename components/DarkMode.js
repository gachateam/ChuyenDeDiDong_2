import React, {useState, useEffect} from 'react'
import {EventRegister} from 'react-native-event-listeners';
import themeContext from '../config/themeContext';
import theme from '../config/theme';

export default function SettingsScreen () {
    
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
        <themeContext.Provider value = {mode === true ? theme.light : theme.dark}>
        </themeContext.Provider>
    )
}

