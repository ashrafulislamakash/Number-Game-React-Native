import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import Card from '../componenets/Card';
import Color from '../constants/Color';
import Input from '../componenets/Input';

const GameScreen = (props) => {
  return (
    <View style={styles.Screen}>
      <Text style={styles.title}> Start a New Game </Text>
      <Card style={styles.inputContinner}>
        <Text> Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSublit
          keyboardType="number-pad"
          maxLength={5}
        />
        <View style={styles.buttoncontiner}>
          <View style={styles.button}>
            <Button title="Rest" onPress={() => { }} color={Color.accent} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => { }} color={Color.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  Screen: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    marginVertical: 10,
  },

  inputContinner: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },

  buttoncontiner: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 90,
  },

  input: {
    width: 90,
  },
});

export default GameScreen;
