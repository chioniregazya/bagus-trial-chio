import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import {FontAwesome5} from '@expo/vector-icons';

const Actions = ({ play, canPlay, playerChoice }) => {
  return (
    <View style={styles.actionsContainer}>
      <TouchableOpacity
        disabled={!canPlay}
        style={[
          styles.actionButton,
          playerChoice === 1 && styles.selectedButton
        ]}
        onPress={() => play(1)}
      >
        <Image source={require('../assets/hand-rock.png')} style={styles.actionImage} />
      </TouchableOpacity>

      <TouchableOpacity
        disabled={!canPlay}
        style={[styles.actionButton,
          playerChoice === 2 && styles.selectedButton
        ]}
        onPress={() => play(2)}
      >
        <Image source={require('../assets/hand-paper.png')} style={styles.actionImage} />
      </TouchableOpacity>

      <TouchableOpacity
        disabled={!canPlay}
        style={[styles.actionButton,
          playerChoice === 3 && styles.selectedButton
       ]}
        onPress={() => play(3)}
      >
        <Image source={require('../assets/hand-scissors.png')} style={styles.actionImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  actions: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between', // Use space-between instead of space-around
    alignItems: 'center',
    width: '100%', // Ensure the container takes full width
    paddingHorizontal: 20, // Add padding to ensure spacing from screen edges
  },
  actionButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: -45,
  },
  selectedButton: {
    borderColor: '#ffcc00',
    borderWidth: 2,

  },
  actionImage: {
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
},
actionsContainer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginBottom: 50,
  alignItems: 'center',
},
});

export default Actions;