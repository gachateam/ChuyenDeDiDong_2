import { DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ACTIONS } from '../context/Action';
import { useGlobal } from '../context/GlobalContext';

const titles = [
    {
        id: 1,
        title: 'Animal',
        name: 'dog',
    },
    {
        id: 2,
        title: 'Fruit',
        name: 'food-apple',
    },
    {
        id: 3,
        title: 'At Home',
        name: 'home',
    },
    {
        id: 4,
        title: 'At School',
        name: 'school',
    },
    {
        id: 5,
        title: 'Travel',
        name: 'airplane-takeoff',
    },
];

export function DrawerContent({ navigation }, props) {
    const { title, dispatch } = useGlobal()
    return (
        <View>
            <DrawerItem
                    icon={({ color, size }) => (
                        <AntDesign
                            name="home"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Home"
                    onPress={() => {
                        navigation.navigate("Home")
                    }}
                />
            {titles.map(({ id, title, name }) => (
                <DrawerItem key={id}
                    icon={({ color, size }) => (
                        <Icon
                            name={name}
                            color={color}
                            size={size}
                        />
                    )}
                    label={title}
                    onPress={() => {
                        dispatch({ type: ACTIONS.CHOOSE_TITLES, payload: title })
                        navigation.navigate("StageScreen")
                    }}
                />

            ))}
        </View>
    );
}