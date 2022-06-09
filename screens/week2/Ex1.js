import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';

export default function Ex1() {
  const navigation = useNavigation();
  return (
    <view style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ backgroundColor: '#50E3C2', height: 100 }}></View>
      </View>
      <Button title="Next" onProgress={() => { navigation.navigate("Ex2") }} />
    </view>
  );
}

