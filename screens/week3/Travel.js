import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Signup from '../../components/week3/Signup';


export default function Travel() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop : 50  }}>
                <Text> Week 3 </Text>
                <Signup />
                <Signup />
                <Signup />
                <Signup />
                <Signup />
                <Signup />

            </View>
        </ScrollView>
    );
}
