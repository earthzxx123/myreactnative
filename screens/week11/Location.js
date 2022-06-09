import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Location() {
    //TOP RIGHT MENU
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={{ paddingRight: 20 }}
                    onPress={() => { navigation.navigate("LocationQuiz"); }}
                >
                    <Text>Quiz</Text>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);
    //SCREEN UI
    return (
        <View style={{ flex: 1 }}>
            <Text></Text>
        </View>
    );
}


