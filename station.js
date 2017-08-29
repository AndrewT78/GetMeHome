import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Vibration } from 'react-native';
import geolib from 'geolib';
import TimerMixin from 'react-timer-mixin';

export default class Station extends Component {
constructor(props) {
  super(props);
  
    this.state = {
      latitude: null,
      longitude: null,
      lastUpdate: null
    };

}
render() {
  return (        

    <View style={stationStyles.stationInfo}>      
      <Text style={[this.state.distanceAlert && stationStyles.distanceAlert]}>Distance to Station :</Text>
      <Text> {this.getDistance()}</Text>
    </View>  
  );
}

getDistance() {  
  if (this.state.latitude != null) {
    return geolib.getDistance(
      {latitude: this.state.latitude, longitude: this.state.longitude},
      {latitude: this.props.lat, longitude: this.props.long}
    );
  }
  else {
    return this.state.error;
        
  }

}

 componentDidMount() {
    console.log('componentDidMount');
    this.setState({ error: "Waiting" });

    this.watchId = navigator.geolocation.watchPosition(
      (position) => {      
        console.log('watchPosition()');
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });

       
          if (this.getDistance() <= 1000) {
            Vibration.vibrate();
            this.setState({ distanceAlert: true });
          }
          else {
            this.setState({ distanceAlert: false });
          }
       

      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    //navigator.geolocation.clearWatch(this.watchId);
  }

}
const stationStyles = StyleSheet.create({
distanceAlert: {
  color: "yellow"
},
stationInfo: {  
  flex: 1,  
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}
});
