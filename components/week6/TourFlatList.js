import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Dimensions, FlatList, Image, View } from "react-native";
import { ScrollView } from "react-native-web";
import TourItem from "./TourItem";


export default function TourFlatList(props) {

    const tours = [
        { "id": "1", "title": "Tour in London", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" },
        { "id": "2", "title": "Tour in Paris", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-2.jpg" },
        { "id": "3", "title": "Tour in Italy", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-3.jpg" },
        { "id": "4", "title": "Tour in Portugal", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-4.jpg" },
        { "id": "5", "title": "Tour in Netherlands", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-5.jpg" }
    ];

    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/trips.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineTours(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }

        useEffectt(() => {
            loadOnlineTours();
        }, []);


        return (
            <View style={props.style}>
                <Text style={{ fontsize: 20 }}>Tour</Text>
                <Text style={{ color: "gray", MarginVertical: 10 }}>Let find out what most interesting things</Text>
                <FlatList
                    horizontal={true}
                    data={onlineTour}
                    renderItem={
                        ({ item, index }) => {
                            console.log(item, index, item.uri);
                            return (
                                <View style={{ marginRight: 10 }}>
                                    <image style={{ width: 250, height: 150 }} source={{ uri: item.uri }} />
                                    <view style={{ backgorundcolor: "black1", width: 250, height: 50, opacity: 0.7, padding: 10, marginTop: -50, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                        <text style={{ fontsize: 20, color: "white" }}>({item.title}</text>
                                    </view>
                                </View>
                                // <TourItem item={item} index={index} />
                            );
                        }
                    }
                    keyExtractor={item => item.id}
                />

            </View>
        );
    }
}