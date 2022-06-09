import React from 'react';
import { Button, View } from 'react-native';

export default function Ex2() {
  const navigation = useNavigation();
  return (
    <view style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ backgroundColor: '#50E3C2', width: 100 }}></View>
      </View>
      <Button title="Next" onProgress={() => { navigation.navigate("Ex3") }} />
    </view>
  );
}

