import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Vibration,ScrollView, Picker } from 'react-native';

import Station from './station.js'; 


export default class TrainLine extends Component {
      
constructor(props) {
  super(props);

  this.state = {     
    station: 'joondalup'  
  };

}
render() {

  var trainStations = this.props.stations.filter(item => item.line == this.props.line).map(function(item) {
    return (
      <Picker.Item value={item.key} label={item.name} key={item.key}/>
    );
  });

  return (

    <View style={styles.container}> 
    <Picker
          style={{width: 200}} 
          selectedValue={this.state.station}
          onValueChange={(itemValue, itemIndex) => this.setState({station: itemValue})}>
         {trainStations}
    </Picker> 
    <Station name={this.getName(this.state.station)} lat={this.getLatitude(this.state.station)} long={this.getLongitude(this.state.station)}></Station>

  </View>
  );
}
getStation(key) {
  return this.props.stations.find(function(x) {
    return x.key == key;
  });
}
getName(stationKey) {  
  return this.getStation(stationKey).name;
}
getLongitude(stationKey) {
  return this.getStation(stationKey).longitude;
}
getLatitude(stationKey) {
  return this.getStation(stationKey).latitude;  
}



}

const styles = StyleSheet.create({
  container: {   
    alignItems: 'center'    
  },
});



TrainLine.propTypes = {
    stations : React.PropTypes.array.isRequired,
 }
 TrainLine.defaultProps = {    
       stations: [          
         {key:"perth", name:'Perth', latitude:'-31.952349', longitude:'115.857735', line:'joondalup'},      
         {key:'leederville', name:'Leederville', latitude:'-31.938957' , longitude:'115.840258', line:'joondalup'},      
         {key:'glendalough', name:'Glendalough', latitude:'-31.914717' , longitude:'115.823050', line:'joondalup'},                
         {key:'stirling' , name:'Stirling', latitude:'-31.894155' , longitude:'115.804382', line:'joondalup'},                
         {key:'warwick', name:'Warwick', latitude:'-31.844807' , longitude:'115.796285', line:'joondalup'},      
         {key:'greenwood', name:'Greenwood', latitude:'-31.818667' , longitude:'115.783136', line:'joondalup'},                
         {key:'whitfords', name:'Whitfords', latitude:'-31.799351' , longitude:'115.782268', line:'joondalup'},                
         {key:'edgewater', name:'Edgewater', latitude:'-31.771995' , longitude:'115.778667', line:'joondalup'},      
         {key:'joondalup', name:'Joondalup', latitude:'-31.745104' , longitude:'115.767388', line:'joondalup'},              
         {key:'currambine', name:'Currambine', latitude:'-31.724910' , longitude:'115.750527', line:'joondalup'},              
         {key:'clarkson', name:'Clarkson', latitude:'-31.690780' , longitude:'115.737399', line:'joondalup'},              
         {key:'butler', name:'Butler', latitude:'-31.635421' , longitude:'115.700047', line:'joondalup'},
         
         {key:"perth", name:'Perth', latitude:'-31.952349', longitude:'115.857735', line:'midland'},
         {key:"mciver", name:'McIver', latitude:'-31.951638', longitude:'115.866513', line:'midland'},
         {key:"claisebrook", name:'Claisebrook', latitude:'-31.949301', longitude:'115.872495', line:'midland'},
         {key:"eastperth", name:'East Perth', latitude:'-31.944208', longitude:'115.877119', line:'midland'},
         {key:"mountlawley", name:'Mount Lawley', latitude:'-31.934741', longitude:'115.880838', line:'midland'},         
         {key:"maylands", name:'Maylands', latitude:'-31.928283', longitude:'115.891721', line:'midland'},
         {key:"meltham", name:'Meltham', latitude:'-31.922488', longitude:'115.900300', line:'midland'},
         {key:"bayswater", name:'Bayswater', latitude:'-31.918079', longitude:'115.912637', line:'midland'},
         {key:"ashfield", name:'Ashfield', latitude:'-31.912684', longitude:'115.935993', line:'midland'},
         {key:"bassendean", name:'Bassendean', latitude:'-31.903647', longitude:'115.946934', line:'midland'},
         {key:"successhill", name:'Success Hill', latitude:'-31.900189', longitude:'115.912637', line:'midland'},
         {key:"guildford", name:'Guildford', latitude:'-31.898887', longitude:'115.965800', line:'midland'},
         {key:"eastguildford", name:'East Guildford', latitude:'-31.896434', longitude:'115.980010', line:'midland'},
         {key:"woodbridge", name:'Woodbridge', latitude:'-31.891450', longitude:'115.992788', line:'midland'},
         {key:"midland", name:'Midland', latitude:'-31.891784', longitude:'116.001670', line:'midland'},
        ],  
 }

 



