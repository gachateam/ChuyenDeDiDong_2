import React from 'react'
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'

const Read = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.questions}>Questions</Text>
            </View>

            <TouchableOpacity style={styles.listen}>
                <Image
                    source={{
                        uri: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/listening-music-2742467-2276710.png',
                    }}
            style={styles.banner1}
          resizeMode="contain"
        />
            </TouchableOpacity>

            <View style={styles.bannerbottom}>
            <TouchableOpacity style={styles.listen}>
                <Image
                    source={{
                        uri: 'https://cdn.iconscout.com/icon/premium/png-64-thumb/voice-recorder-3334898-2789123.png',
                    }}
            style={styles.banner2}
          resizeMode="contain"
        />
            </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity
                style={styles.button}>
                <Text style={styles.buttonText}>KIỂM TRA</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

export default Read

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
        height: 150,
    
      },
      questions: {
        fontSize: 28,
      },
      banner1: {
        height: 100,
        width: 60,
      },
      banner2: {
        height: 110,
        width: 80,
        paddingTop: 600,
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
        marginBottom: 30,
        textAlign: 'center',
      },
      buttonText: {
        fontSize: 18,
        fontWeight: '400',
        color: 'white',
      },
      listen:{
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 10,
      },
      bannerbottom: {
          height: 340,
          borderRadius: 50,
      }
})
