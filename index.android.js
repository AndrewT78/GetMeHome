/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Picker
} from 'react-native';

import TrainLine from './trainline.js'; 


export default class GetMeHome extends Component {
  
   constructor(props) {
    super(props);
    
    this.state = {
      trainline: 'joondalup'
    };
  }
  

  render() {
    return (       
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Get Me Home!
        </Text>             
          

        <Picker
          style={{width: 200}} 
          selectedValue={this.state.trainline}
          onValueChange={(itemValue, itemIndex) => this.setState({trainline: itemValue})}>
          <Picker.Item label="Joondalup Line" value="joondalup" />
          <Picker.Item label="Midland Line" value="midland" />          
        </Picker>    

        <TrainLine line={this.state.trainline}></TrainLine>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {   
    alignItems: 'center',
    backgroundColor: '#cccccc',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  selectorHeading: {
    textAlign: 'center',    
    marginBottom: 5,
    marginTop:5
  },
});

AppRegistry.registerComponent('GetMeHome', () => GetMeHome);
