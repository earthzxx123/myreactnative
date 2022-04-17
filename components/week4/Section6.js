import React from 'react';
import { View, Text, Image } from 'react-native';



export default function Section6() {
    return (
        <View style={{padding:15}}>
            <Text>Location</Text>
            <Text>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
            <View>
                <Image style={{flex:1,resizeMode:'cover',marginVertical:10}} source={ require('../../assets/week3/map.jpg')}/>
            </View>
        </View>
    );
}