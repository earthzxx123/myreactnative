import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Hotel from '../../components/week3/Hotel';
import MyIcon from '../../components/week3/MyIcon';
import Signup from '../../components/week3/Signup';


export default function Travel() {
    return (
        <ScrollView>
            <View style={{ flex: 1, padding: 20 }}>
                
                <Menu />
                <Card />
                <Hotel />
                <Signup />
                <Text> Week 3 </Text>
                <MyIcon title='หัวใจ' name='heart' size={30} color="orange"/>
                <MyIcon title='บ้าน' name='home' size={30} color="tomato"/>
                <MyIcon title='edit' name='edit' size={30} color="green"/>
                <MyIcon title='ลบ' name='trash' size={30} color="red"/>

            </View>
        </ScrollView>
    );
}
