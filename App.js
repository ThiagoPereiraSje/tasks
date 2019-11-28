import React, { Component } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';

export class App extends Component {
  async componentDidMount() {
    await Font.loadAsync({
      'Lato': require('./assets/fonts/Lato.ttf'),
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello World!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Lato',
  },
})

export default App;
