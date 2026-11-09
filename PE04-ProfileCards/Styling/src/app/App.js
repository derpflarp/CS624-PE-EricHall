
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image
              style={styles.cardImage}
              source={require('../../assets/images/user.png')}
            />
          </View>
          <Text style={styles.cardName}>John Doe</Text>
          <Text style={styles.cardOccupation}>React Native Developer</Text>
          <Text style={styles.cardDescription}>
            John is a mobile app developer passionate about building
            applications with React Native and creating useful experiences
            for users.
          </Text>
        </View>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15
  },
  cardImage: {
    width: 80,
    height: 80
  },
  cardName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
    color: 'black'
  },
  cardOccupation: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: 'black',
    marginTop: 5
  },
  cardDescription: {
    fontSize: 14,
    color: 'black',
    textAlign: 'left',
    marginTop: 25,
    marginHorizontal: 25,
    lineHeight: 20
  }
});
