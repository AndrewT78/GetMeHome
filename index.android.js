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
  TouchableHighlight
} from 'react-native';

import Station from './station.js'; 


export default class GetMeHome extends Component {
  
   constructor(props) {
    super(props);
  }
  

  render() {
    return (       
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Get Me Home!
        </Text>
                
        <Text style={styles.instructions}>
          Select your destination...
        </Text>               
        <Station name='Glendalough' />      
        <Station name='Stirling' />      
        <Station name='Warwick' />      
        <Station name='Greenwood' />      
        <Station name='Whitfords' />      
        <Station name='Edgewater' />      
        <Station name='Joondalup' />              
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#cccccc',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',    
    marginBottom: 5,
    marginTop:10
  },
});

AppRegistry.registerComponent('GetMeHome', () => GetMeHome);
