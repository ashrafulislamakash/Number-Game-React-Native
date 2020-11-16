import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './componenets/Header';
import GameScreen from './Screen/GameScreen';
import MainGameScreen from './Screen/MainGameScreen'

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const startGameHandler = (selectedNumber) => {

    setUserNumber(selectedNumber);

  };

  let content = <GameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <MainGameScreen userChoice={userNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title=" Guess a Number"></Header>
      <content />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
