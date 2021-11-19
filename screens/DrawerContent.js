import {DrawerItem} from '@react-navigation/drawer';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ACTIONS} from '../context/Action';
import {useGlobal} from '../context/GlobalContext';
import database from './../database/database';

export function DrawerContent({navigation}) {
  const {dispatch} = useGlobal();
  const [category, setCategory] = useState([]);

  const getCategory = () => {
    database
      .ref('/category')
      .once('value')
      .then(snapshot => {
        snapshot.forEach(val => {
          const temp = [
            ...category,
            {
              title: val.key,
              name: val.child('name').val(),
            },
          ];
          setCategory(temp);
        });
      });
  };

  useEffect(() => {
    getCategory();
  });

  return (
    <View>
      <DrawerItem
        icon={({color, size}) => (
          <AntDesign name="home" color={color} size={size} />
        )}
        label="Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      {category &&
        category.map(({title, name}, index) => {
          return (
            <DrawerItem
              key={index}
              icon={({color, size}) => (
                <Icon name={name} color={color} size={size} />
              )}
              label={title}
              onPress={() => {
                dispatch({type: ACTIONS.CHOOSE_TITLES, payload: title});
                navigation.navigate('StageScreen');
              }}
            />
          );
        })}
    </View>
  );
}
