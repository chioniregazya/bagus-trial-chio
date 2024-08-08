import React, { useState, useRef } from "react";
import { StyleSheet, SafeAreaView, Text, View, Animated,ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import DisplayResult from './DisplayResult';
import Actions from './Actions';
// import Header from './Header';

export default function RockPaper() {
    const [userChoice, setUserChoice] = useState(0);
    const [computerChoice, setComputerChoice] = useState(0);
    const [result, setResult] = useState("");
    const [canPlay, setPlay] = useState(true);
    const [boxColor, setBoxColor] = useState('transparent');

    const fadeAnimation = useRef(new Animated.Value(1)).current;

    function play(choice) {
        const randomComputerChoice = Math.floor(Math.random() * 3) + 1;
        let result = "";
        let color ="";

        if (choice === randomComputerChoice) {
            result = "SERI!";
            color ='yellow';
        } else if (choice === 1 && randomComputerChoice === 3) {
            result = "MENANG";
            color ='green';
        } else if (choice === 2 && randomComputerChoice === 1) {
            result = "MENANG";
            color ='green';
        } else if (choice === 3 && randomComputerChoice === 2) {
            result = "MENANG";
            color ='green';
        } else {
            result = "KALAH";
            color ='red';
        }

        setUserChoice(choice);
        setComputerChoice(randomComputerChoice);

        setTimeout(() => {
            setResult(result);
        }, 300);

        Animated.sequence([
            Animated.timing(fadeAnimation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnimation, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start();

        setPlay(false);
        setTimeout(() => {
            setPlay(true);
        }, 600);
    }

    return (
        <ImageBackground source={require("../assets/background.png")} style={styles.background}>
            <SafeAreaView style={styles.container}>
                {/* <Header /> */}
                <View style={styles.content}>
                    <View style={styles.result}>
                        <Animated.Text
                            style={[styles.resultText, { opacity: fadeAnimation }]}
                        >
                            {result}
                        </Animated.Text>
                    </View>
                    <View style={styles.screen}>
                        {!result ? (
                            <Text style={styles.readyText}> ? </Text>
                        ) : (
                            <DisplayResult
                                userChoice={userChoice}
                                computerChoice={computerChoice}
                            />
                        )}
                    </View>
                    <Actions play={play} canPlay={canPlay} />
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        marginTop: 5,
    },
    background: {
        flex: 1,
        resizeMode: "cover"
    },
    content: {
        flex: 1,
        justifyContent: 'space-between', // Ensure content is spaced evenly
    },
    result: {
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 10,
    },
    resultText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'white',
        padding: 10, // Padding inside the box
        borderRadius: 10, // Rounded corners
        textAlign: 'center', // Center align the text inside the box
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    readyText: {
        textAlign: 'center',
        fontSize: 48,
        fontWeight: 'bold',
        color: 'white',
        padding: 20, // Increase padding for ready text
        borderWidth: 5, // Increase border width for ready text
        borderColor: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 15, // Increase rounded corners for ready text
    },
});
