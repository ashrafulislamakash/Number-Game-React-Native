import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NumberContainer from '../componenets/NumberContainer'
import Card from '../componenets/Card'

const generateRandomBetween = (min, max, exclude) => {

    min = Math.ceil(min);
    max = Math.floor(max)
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNumber;
    }

};



const MainGameScreen = () => {
    const [currentGuess, setcurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));

    return (
        <View style={styles.screen}>
            <Text> Opponent's Guess</Text>
            <NumberContainer>  {currentGuess}</NumberContainer>
            <Card style={styles.buttonconiner}>
                <button title="Lower" onPress={() => { }} />
                <button title="Higher" onPress={() => { }} />

            </Card>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonconiner: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }

});
export default MainGameScreen;
