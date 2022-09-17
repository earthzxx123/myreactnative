import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import GPS from "../../helpers/GPS";
import MyMapView from "../../components/week11/MyMapView";


export default function Location() {
    const [location, setLocation] = useState(null);
    const [recordLocation, setRecordLocation] = useState(false);

    //ACTION WHEN ENTER SCREENS
    useEffect(async () => {
        console.log("ENTER SCREEN");
        let loc = await GPS.getLocation();
        if (loc) {
            //console.log("Locatoin : ", loc);
            setLocation(loc);
        }
    }, []);
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
            <TouchableOpacity
                onPress={() => { setRecordLocation(!recordLocation); }}
                style={{ backgroundColor: "lightblue", flex: 1, alignItems: "center", justifyContent: "center", width: 80, height: 80, borderRadius: 40, position: "absolute", right: 30, bottom: 30, elevation: 5, }} >
                <FontAwesome name={recordLocation ? "pause" : "play"} size={30} />
            </TouchableOpacity>

        </View>

    );
}


