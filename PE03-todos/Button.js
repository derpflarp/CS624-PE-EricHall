// problem 1: create a submit button for adding todos

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// create a reusable button that calls the supplied function
const Button = ({ submitTodo }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={styles.button}
      onPress={submitTodo}
    >
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  </View>
);

// define the button layout and appearance
const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 3,
  },
  buttonText: {
    color: '#666666',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Button;