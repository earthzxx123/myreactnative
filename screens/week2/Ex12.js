import React from 'react';
import { View } from 'react-native';

export default function Ex12() {
  return (
    <View style={{ flex : 2 , flexDirection : 'row' }}>    
      <View style={{ backgroundColor : '#50E3C2' , width : 150 , height:800 }}></View>
      <View style={{ backgroundColor : 'steelblue' , width : 150, height:800  }}></View>
      <View style={{ backgroundColor : 'purple' , width : 150, height:800  }}></View>     
      
    </View>
  );
}

