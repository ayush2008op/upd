import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      displayText: '',
    };
  }

  render() {
    return (
      <View>
        <Header
          backgroundColor="darkblue"
          centerComponent={{
            text: 'MONKEY CHUNKY APP',
            style: { color: '#fff' },
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter a word"
          placeholderTextColor="darkblue"
          onChangeText={(newWord) => {
            this.setState({ userInput: newWord });
          }}
          value={this.state.userInput}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.setState({ displayText: this.state.userInput });
          }}>
          <Text style = {styles.btntxt}> Press Me </Text>
        </TouchableOpacity>
        <Text style={styles.displayText}>{this.state.displayText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    marginTop: 200,
    width: '50%',
    padding: 15,
    marginLeft: 80,
    textAlign: 'center',
  },

  button: {
    backgroundColor: 'blue',
    width: '30%',
    marginTop: 10,
    marginLeft: 110,
    padding: 15,
    borderRadius: 10,
    textAlign: 'center',
  },

  displayText: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 25,
    color: "blue"
  },

  btntxt:{
    color: "white"
  }
});
