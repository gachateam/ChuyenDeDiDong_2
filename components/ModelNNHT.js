import React, {useState} from 'react';
import {
  Alert,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DateTimePicker} from '@react-native-community/datetimepicker';

const ModelNNHT = ({setModalVisibleNNHT, modalVisibleNNHT}) => {
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState(date.getHours() + ':' + date.getMinutes());

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onChange = (e, selectDate) => {
    const currentDate = selectDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
    setText(fTime);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisibleNNHT}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisibleNNHT(!modalVisibleNNHT);
      }}
    >
      <TouchableOpacity
        style={styles.centeredView}
        onPress={() => setModalVisibleNNHT(!modalVisibleNNHT)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Nhắc nhở học tập</Text>
          <View style={styles.time}>
            <Text style={styles.modalText}>{text}</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <Pressable
            onPress={showTimepicker}
            style={[styles.button, styles.buttonClose, {marginBottom: 10}]}
          >
            <Text style={styles.textStyle}>Chọn thời gian</Text>
          </Pressable>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisibleNNHT(!modalVisibleNNHT)}
          >
            <Text style={styles.textStyle}>Lưu</Text>
          </Pressable>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModelNNHT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 8,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
});
