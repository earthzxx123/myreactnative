import React from 'react';
import { View, Text, Image } from 'react-native';
import deepFreezeAndThrowOnMutationInDev from 'react-native/Libraries/Utilities/deepFreezeAndThrowOnMutationInDev';



export default function Section3() {
    return (
        <View style={{}}>
            <View style={{flexDirection:'row',padding:10}}>
                <View style={{borderRadius:50,alignItems:'center',alignContent:'center',backgroundColor:'tomato',padding:15,}}>
                    <Text>9.5</Text>

                    </View>   
                    <View style={{paddingLeft:10}}>
                        <Text>Excellent</Text>
                        <Text>See 801 reviews</Text>
                    </View> 
            </View>

        </View>
    );
}