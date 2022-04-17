import React from 'react';
import { View , Text, Image } from 'react-native';
import MyIcon from '../week3/MyIcon';



export default function Section5() {
    return (
        <View style={{ flexDirection : 'row' , justifyContent : 'space-around' }}>
        <MyIcon title='wifi' name='wifi' size={30} color='green' />
        <MyIcon title='coffee' name='coffee' size={30} color='green' />
        <MyIcon title='bath' name='bath' size={30} color='green' />
        <MyIcon title='car' name='car' size={30} color='green' />
        <MyIcon title='paw' name='paw' size={30} color='green' />
    </View>
    );
}
