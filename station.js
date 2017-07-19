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
<TouchableHighlight style={stationStyles.station} onPress={() => this.setState({ pressed: !this.state.pressed })}>
<View>
<Text>{this.props.name}</Text> 
{ this.state.pressed ? (
<Text>Wake me Up!</Text>
) : (<Text>Click to select!</Text>)} 
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
justifyContent: 'center', 
alignItems: 'center',
backgroundColor: '#eeeeee',
}
});
