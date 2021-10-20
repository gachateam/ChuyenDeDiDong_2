import React from 'react'
import { Image, ImageBackground, ImageEditor, StyleSheet, Text, View , TouchableOpacity} from 'react-native'



const ImgQuestionsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style= {styles.top}>
                <Text style = {styles.questions}>
                   Q: Đâu là con Mèo ?
                </Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity style={styles.optionButton}>
                <Image 
                    source = {{
                        uri:'https://cdni.iconscout.com/illustration/premium/thumb/dog-holding-bone-in-mouth-4238889-3518614.png',
                    
                    }} 
                    style = {styles.banner}
                    resizeMode = "contain"
                    />
                <Text style={styles.option}>DOG</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                <Image 
                    source = {{
                        uri:'https://cdni.iconscout.com/illustration/premium/thumb/cat-playing-with-ball-4238780-3518541.png',
                    
                    }} 
                    style = {styles.banner}
                    resizeMode = "contain"
                    />
                <Text style={styles.option}>CAT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                <Image 
                    source = {{
                        uri:'https://cdni.iconscout.com/illustration/premium/thumb/tiger-with-face-mask-4238787-3518546.png',
                    
                    }} 
                    style = {styles.banner}
                    resizeMode = "contain"
                    />
                <Text style={styles.option}>TIGER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                <Image 
                    source = {{
                        uri:'https://cdni.iconscout.com/illustration/premium/thumb/parrot-singing-song-4278579-3581473.png',
                    
                    }} 
                    style = {styles.banner}
                    resizeMode = "contain"
                    />
                <Text style={styles.option}>PARROT</Text>
                </TouchableOpacity>
                </View>
            <View style={styles.bottom}>
                    <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>KIỂM TRA</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                    style={styles.button}>
                    <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}>
                    <Text style={styles.buttonText}>QUIT</Text>
                    </TouchableOpacity> */}
            </View>
            
        </View>
    )
}

export default ImgQuestionsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        height: '100%',
      },
      top: {
        marginVertical: 16,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
      questions: {
        fontSize: 28,
      },
      banner: {
        height: 190,
        width :170,
    },
    options:{
        display: 'flex',
        flexWrap : 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    option:{
        fontSize: 18,
        color: 'white',
        fontWeight: '300',
        fontStyle: 'normal',
        textAlign: 'auto',
    },
    optionButton: {
        backgroundColor: 'green',
        borderRadius: 2,
        textAlign: 'center',
        marginBottom: 13,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        backgroundColor: '#6699CC',
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
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 30,
        textAlign: 'center',
      },
      buttonText: {
        fontSize: 18,
        fontWeight: '400',
        color: 'white',
      },
})
