import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';

const images = [
    require('../assets/hand-rock.png'),
    require('../assets/hand-paper.png'),
    require('../assets/hand-scissors.png'),
];

const DisplayResult = ({ userChoice, computerChoice }) => {
    return (
        <>
            <View style={styles.column}>
                <Image 
                source={images[userChoice - 1]}
                style={userChoice === 3 ? styles.scissorsLeftIcon : styles.leftIcon}
                />
                {/* <FontAwesome5 
                    name={icons[userChoice - 1]}
                    size={64}
                    color='#f9d835'
                    solid
                    style={userChoice === 3 ? styles.scissorsLeftIcon : styles.leftIcon} */}
                {/* /> */}
                <Text style={styles.playerName}>You</Text>
            </View>

            <View style={styles.column}>
                <FontAwesome5
                    name={icons[computerChoice - 1]}
                    size={64}
                    color="#f9d835"
                    solid
                    style={computerChoice === 3 ? styles.scissorsRightIcon : styles.rightIcon}
                />
                <Text style={styles.playerName}>Computer</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    column: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%', // Ensures each column takes up half of the screen width
    },
    playerName: {
        color: '#373737',
        fontSize: 16,
        marginTop: 16,
    },
    leftIcon: {
        transform: [{rotateZ: '80deg'}],
    },
    scissorsLeftIcon: {
        transform: [{rotateZ: '180deg'}, {rotateX: '180deg'}],
    },
    rightIcon: {
        transform: [],
    },
    scissorsRightIcon: {
        transform: [{rotateZ: '180deg'}, {rotateY: '180deg'}, {rotateX: '180deg'}],
    },
});

export default DisplayResult;
