import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './componenets/Header';
import GameScreen from './Screen/GameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title=" Guess a Number"></Header>
      <GameScreen></GameScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
