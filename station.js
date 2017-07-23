import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
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
  <Text style={[stationStyles.stationName, this.state.pressed && stationStyles.stationNameSelected]}>{this.props.name}</Text>
  {this.state.pressed &&
    <View>
    <Text>Latitude: {this.state.latitude}</Text>
         <Text>Longitude: {this.state.longitude}</Text>      
         <Text>GPS Error: {this.state.error}</Text>   
         </View>
  }
  </View> 
  </TouchableHighlight>
  );
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
flex: 1, 
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
