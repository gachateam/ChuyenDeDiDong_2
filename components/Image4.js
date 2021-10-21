import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const height = Dimensions.get('screen').height;

const Image4 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.questions}>Q: Đâu là con Mèo ?</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton}>
          <Image
            source={{
              uri: 'https://cdni.iconscout.com/illustration/premium/thumb/dog-holding-bone-in-mouth-4238889-3518614.png',
            }}
            style={styles.banner}
            resizeMode="contain"
          />
          <Text style={styles.option}>DOG</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Image
            source={{
              uri: 'https://cdni.iconscout.com/illustration/premium/thumb/cat-playing-with-ball-4238780-3518541.png',
            }}
            style={styles.banner}
            resizeMode="contain"
          />
          <Text style={styles.option}>CAT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Image
            source={{
              uri: 'https://cdni.iconscout.com/illustration/premium/thumb/tiger-with-face-mask-4238787-3518546.png',
            }}
            style={styles.banner}
            resizeMode="contain"
          />
          <Text style={styles.option}>TIGER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Image
            source={{
              uri: 'https://cdni.iconscout.com/illustration/premium/thumb/parrot-singing-song-4278579-3581473.png',
            }}
            style={styles.banner}
            resizeMode="contain"
          />
          <Text style={styles.option}>PARROT</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BottomModal')}>
          <Text style={styles.buttonText}>KIỂM TRA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Image4;

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
    height: height / 4.5,
    width: 171,
  },
  options: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'auto',
  },
  optionButton: {
    borderRadius: 5,
    textAlign: 'center',
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
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
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
});
