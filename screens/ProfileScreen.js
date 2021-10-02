import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React, {Fragment} from 'react';

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

const LinkList = (): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      {links.map(({id, title, description}) => (
        <Fragment key={id}>
          <View
            style={[
              styles.separator,
              {
                backgroundColor: isDarkMode ? Colors.dark : Colors.light,
              },
            ]}
          />
            <Text style={styles.link}>{title}</Text>
            <Text
              style={[
                styles.description,
                {
                  color: isDarkMode ? Colors.lighter : Colors.dark,
                },
              ]}>
              {description}
            </Text>
        </Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.primary,
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
  },
});

export default LinkList;