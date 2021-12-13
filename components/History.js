import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { IconButton } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { Stage } from './../Model/Stage';
import database from '../database/database';
import { ACTIONS } from './../context/Action';
import { useGlobal } from '../context/GlobalContext';

const History = ({ navigation }) => {
  const { dispatch } = useGlobal();
  const [stages, setStages] = useState([]);
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    if (auth().currentUser) {
      firestore()
        .collection(`users/${auth().currentUser.uid}/category`)
        .get()
        .then(querySnapshot => {
          let cate = []

          querySnapshot.forEach(documentSnapshot => {
            cate.push({
              stage: new Stage(documentSnapshot.data()),
              category: documentSnapshot.id,
            });
          });

          setStages(cate)
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (stages.length !== 0) {
      database
        .ref('/category')
        .once('value')
        .then(snapshot => {
          snapshot.forEach(val => {
            if (checkInclude(stages, val.key)) {
              const temp = [
                ...categorys,
                {
                  title: val.key,
                  name: val.child('name').val(),
                },
              ];
              setCategorys(temp);
            }
          });
        });
    }
  }, [stages]);

  const checkInclude = (arr = [], value) => {
    let result = false;

    arr.forEach(e => {
      if (e.category === value) {
        return (result = true);
      }
    });

    return result;
  };

  const getPercent = title => {
    let result = 0;

    stages.forEach(e => {
      if (e.category === title) {
        return (result = e.stage.getTienDo());
      }
    });

    return result;
  };

  const handlePress = title => {
    dispatch({ type: ACTIONS.CHOOSE_TITLES, payload: title });
    navigation.navigate('StageScreen');
  };

  return (
    <ScrollView style={styles.scrollView} horizontal={true}>
      {categorys &&
        categorys.map((e, i) => (
          <TouchableOpacity
            style={styles.element}
            key={i}
            onPress={() => handlePress(e.title)}
          >
            <ProgressCircle
              percent={getPercent(e.title)}
              radius={50}
              borderWidth={4}
              color="#1597E5"
              shadowColor="#999"
              bgColor={'#fff'}
            >
              <IconButton icon={e.name} size={32} />
              <Text>{e.title}</Text>
            </ProgressCircle>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

export default History;

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 10,
    paddingTop: 20,
  },
  text: {
    fontSize: 42,
  },
  element: {
    paddingHorizontal: 10,
  },
});
