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
  ScrollView
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

        <ScrollView>      
          <Station name='Perth' latitude='-31.952349' longitude='115.857735' />      
          <Station name='Leederville' latitude='-31.938957' longitude='115.840258' />      
          <Station name='Glendalough' latitude='-31.914717' longitude='115.823050' />                
          <Station name='Stirling'  latitude='-31.894155' longitude='115.804382' />                
          <Station name='Warwick' latitude='-31.844807' longitude='115.796285' />      
          <Station name='Greenwood' latitude='-31.818667' longitude='115.783136' />                
          <Station name='Whitfords' latitude='-31.799351' longitude='115.782268' />                
          <Station name='Edgewater' latitude='-31.771995' longitude='115.778667' />      
          <Station name='Joondalup' latitude='-31.745104' longitude='115.767388' />              
          <Station name='Currambine' latitude='-31.724910' longitude='115.750527' />              
          <Station name='Clarkson' latitude='-31.690780' longitude='115.737399' />              
          <Station name='Butler' latitude='-31.635421' longitude='115.700047' />              
        </ScrollView>
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
  instructions: {
    textAlign: 'center',    
    marginBottom: 5,
    marginTop:10
  },
});

AppRegistry.registerComponent('GetMeHome', () => GetMeHome);
