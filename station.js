import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import geolib from 'geolib'
export default class Station extends Component {
constructor(props) {
  super(props);
  
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      pressed: false
    };

}
render() {
  return (
  <TouchableHighlight style={[stationStyles.station, this.state.pressed && stationStyles.selected]} onPress={() => this.setState({ pressed: !this.state.pressed })}>
  <View>
  <Text style={[stationStyles.stationName, this.state.pressed && stationStyles.stationNameSelected]}>{this.props.name} ({this.props.latitude}, {this.props.longitude})</Text>
  {this.state.pressed &&
    <View>         
         <Text>Distance to Station : {this.getDistance()}</Text> 
    </View>
  }
  </View> 
  </TouchableHighlight>
  );
}

getDistance() {  
  if (this.state.latitude != null) {
    return geolib.getDistance(
      {latitude: this.state.latitude, longitude: this.state.longitude},
      {latitude: this.props.latitude, longitude: this.props.longitude}
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
station: {
height:100,  
width:'90%', 
margin:10,
padding:5,
backgroundColor: '#dddddd',
},
selected: {
   backgroundColor: "#ffffff"   
},
stationName: {
  fontSize:16
},
stationNameSelected: {
    color: 'green' 
    
}
});
