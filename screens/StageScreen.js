import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { useGlobal } from '../context/GlobalContext';


const StageScreen = () => {
    const {title} = useGlobal()
    return (
        <Text style={styles.container}>
            {title}
        </Text>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default StageScreen