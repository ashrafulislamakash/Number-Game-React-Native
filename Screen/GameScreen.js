import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import Card from '../componenets/Card';
import Color from '../constants/Color';
import Input from '../componenets/Input';

const GameScreen = (props) => {

  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const restInputHandler = () => {
    setEnteredValue('')
    setConfirmed(false)
  };


  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      return;

    }
    setConfirmed(true)

    setEnteredValue('');
    setSelectedNumber(chosenNumber);

  };


  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" />
      </Card>
    );
  }



  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.Screen}>
        <Text style={styles.title}> Start a New Game </Text>
        <Card style={styles.inputContinner}>
          <Text> Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttoncontiner}>
            <View style={styles.button}>
              <Button title="Rest" onPress={restInputHandler} color={Color.accent} />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" onPress={confirmInputHandler} color={Color.primary} />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
