import React from 'react'
import { Image, ImageBackground, ImageEditor, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'

const height = Dimensions.get('screen').height

const ImgQuestionsScreen = ({ navigate }) => {

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.questions}>Question</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity style={styles.optionButton}>
                    <Image
                        source={{
                            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png',
                        }}
                        style={styles.banner}
                        resizeMode="contain"
                    />
                    <Text style={styles.option}>Option 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Image
                        source={{
                            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png',
                        }}
                        style={styles.banner}
                        resizeMode="contain"
                    />
                    <Text style={styles.option}>Option 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Image
                        source={{
                            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png',
                        }}
                        style={styles.banner}
                        resizeMode="contain"
                    />
                    <Text style={styles.option}>Option 3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Image
                        source={{
                            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png',
                        }}
                        style={styles.banner}
                        resizeMode="contain"
                    />
                    <Text style={styles.option}>Option 4</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Kiểm tra</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ImgQuestionsScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        height: '100%',
    },
    top: {
        marginVertical: 16,
    },
    questions: {
        fontSize: 28,
    },
    banner: {
        height: height / 4.5,
        width: 170,
    },
    options: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
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
