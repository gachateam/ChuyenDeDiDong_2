import { DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const links = [
    {
        id: 1,
        title: 'Animal',
        description: 'All thing about animal',
    },
    {
        id: 2,
        title: 'Fruit',
        description: 'All thing about fruit',
    },
    {
        id: 3,
        title: 'At Home',
        description: 'Items at home',
    },
    {
        id: 4,
        title: 'At School',
        description: 'Items at school',
    },
    {
        id: 5,
        title: 'Travel',
        description: 'When you travel',
    },
];

export function DrawerContent({ navigation }, props) {
    return (
        <View>
            <DrawerItem
                icon={({ color, size }) => (
                    <Icon
                        name="dog"
                        color={color}
                        size={size}
                    />
                )}
                label="Animal"
                onPress={() => {
                    navigation.navigate("Notifications")
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Icon
                        name="food-apple"
                        color={color}
                        size={size}
                    />
                )}
                label="Fruit"
                onPress={() => {
                    navigation.goBack()
                }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Icon
                        name="home"
                        color={color}
                        size={size}
                    />
                )}
                label="At Home"
                onPress={() => { }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Icon
                        name="school"
                        color={color}
                        size={size}
                    />
                )}
                label="At School"
                onPress={() => { }}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Icon
                        name="airplane-takeoff"
                        color={color}
                        size={size}
                    />
                )}
                label="Travel"
                onPress={() => { }}
            />
        </View>
    );
}