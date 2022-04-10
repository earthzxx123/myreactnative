import React from 'react';
import { View } from 'react-native';

export default function Ex7() {
  return (
    <View style={{ flex : 1 , flexDirection : 'row',alignItems:'flex-end' }}>    
      <View style={{ backgroundColor : '#50E3C2' , width : 100 , height:100 }}></View>
      <View style={{ backgroundColor : 'steelblue' , width : 100, height:100  }}></View>
      <View style={{ backgroundColor : 'purple' , width : 100, height:100  }}></View>     
      
    </View>
  );
}

