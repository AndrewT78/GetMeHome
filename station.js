import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Vibration } from 'react-native';
import geolib from 'geolib'
export default class Station extends Component {
constructor(props) {
  super(props);
  
    this.state = {
      latitude: null,
      longitude: null,
      error: 'Waiting on GPS'      
    };

}
render() {
  return ( 

    <View>
      <Text>Will wake you at {this.props.name}</Text>
      <Text style={[this.state.distanceAlert && stationStyles.distanceAlert]}>Distance to Station {this.getDistance()}</Text>
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

    this.setState({ error: "Waiting..." });

   this.watchId = navigator.geolocation.watchPosition(
      (position) => {
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
    navigator.geolocation.clearWatch(this.watchId);
  }

}
const stationStyles = StyleSheet.create({
distanceAlert: {
  color: "red"
}
});
