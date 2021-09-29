import { DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export function DrawerContent(props) {
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
                onPress={() => {}}
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
                onPress={() => {}}
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
                onPress={() => {}}
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
                onPress={() => {}}
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
                onPress={() => {}}
            />
        </View>
    );
}