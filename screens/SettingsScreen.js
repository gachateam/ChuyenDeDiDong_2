import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ModelNNHT from '../components/ModelNNHT';

const SettingsScreen = () => {
  const [modalVisibleQLTB, setModalVisibleQLTB] = useState(false);
  const [modalVisibleNNHT, setModalVisibleNNHT] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleQLTB}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleQLTB(!modalVisibleQLTB);
        }}
      >
        <TouchableOpacity
          style={styles.centeredView}
          onPress={() => setModalVisibleQLTB(!modalVisibleQLTB)}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisibleQLTB(!modalVisibleQLTB)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </TouchableOpacity>
      </Modal>
      {/* Nhắc nhở học tập */}
      <ModelNNHT
        setModalVisibleNNHT={setModalVisibleNNHT}
        modalVisibleNNHT={modalVisibleNNHT}
      />
      <FlatList
        data={[
          {
            key: 'Quản lý thông báo',
            visibleModal: () => {
              setModalVisibleQLTB(true);
            },
          },
          {
            key: 'Nhắc nhở học tập',
            visibleModal: () => {
              setModalVisibleNNHT(true);
            },
          },
        ]}
        renderItem={({item}) => (
          <Pressable
            style={[styles.button, styles.buttonOpen, styles.container]}
            onPress={item.visibleModal}
          >
            <Text style={styles.item}>{item.key}</Text>
            <Icon style={styles.icon} name="arrow-right" size={30} />
          </Pressable>
        )}
      />
    </View>
  );
};
export default SettingsScreen;
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
