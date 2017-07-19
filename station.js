import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
export default class Station extends Component {
constructor(props) {
super(props);
this.state = {pressed: false};
// Toggle the state every second
//setInterval(() => {
 //this.setState(previousState => {
 //return { pressed: !previousState.pressed };
 //});
 //}, 1000);
}
render() {
return (
<TouchableHighlight style={[stationStyles.station, this.state.pressed && stationStyles.selected]} onPress={() => this.setState({ pressed: !this.state.pressed })}>
<View>
<Text style={[stationStyles.stationName, this.state.pressed && stationStyles.stationNameSelected]}>{this.props.name}</Text>
{this.state.pressed &&
  <Text>Rest easy now....you will be woken...</Text>   
}
</View> 
</TouchableHighlight>
);
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
