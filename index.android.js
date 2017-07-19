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

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }
  
  componentDidMount() {

    this.setState({ error: "Waiting..." });

   this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
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
         <Text>Latitude: {this.state.latitude}</Text>
         <Text>Longitude: {this.state.longitude}</Text>      
         <Text>GPS Error: {this.state.error}</Text>    

             
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
  },
});

AppRegistry.registerComponent('GetMeHome', () => GetMeHome);
