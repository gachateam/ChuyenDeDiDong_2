import { DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
    return (
        <View>
            {titles.map(({id, title, name }) => (
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
                        navigation.navigate("Notifications")
                    }}
                />
            ))}
        </View>
    );
}