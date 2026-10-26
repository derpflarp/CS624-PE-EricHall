// problem 1: add new tasks to the todos array

import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';

class App extends Component {
  constructor() {
    super();

    // initialize the input field, todo list, and filter type
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
  }

  // update the input value whenever the user types
  inputChange(inputValue) {
    console.log('Input Value:', inputValue);
    this.setState({ inputValue });
  }

  // create a new todo and add it to the existing array
  submitTodo() {
    const { inputValue, todos } = this.state;

    // prevent empty tasks from being submitted
    if (!inputValue.trim()) {
      return;
    }

    // create a todo object with an identifier and completion status
    const newTodo = {
      title: inputValue.trim(),
      todoIndex: todos.length,
      complete: false,
    };

    // update the array and clear the input field
    this.setState(
      {
        todos: [...todos, newTodo],
        inputValue: '',
      },
      () => {
        // display the updated todos array in the console
        console.log('Todos:', this.state.todos);
      }
    );
  }

  render() {
    const { inputValue } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={styles.content}
        >
          <Heading />

          <Input
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)}
          />

          <Button submitTodo={() => this.submitTodo()} />
        </ScrollView>
      </View>
    );
  }
}

// define the layout of the application
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;