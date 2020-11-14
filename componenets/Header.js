import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text styles={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    padding: 10,
    backgroundColor: '#1c313a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    color: 'red',
  },
});
export default Header;
