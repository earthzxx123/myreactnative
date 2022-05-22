import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, View } from "react-native";
import { ScrollView } from "react-native-web";
import TourItem from "./TourItem";

export default function Tour(props) {
    return (
        <View style={props.style}>
            <Text style={{ fontsize: 20 }}>Tour</Text>
            <Text style={{ color: "gray", MarginVertical: 10 }}>Let find out what most interesting things</Text>
            <ScrollView horizontal={true}>
                <View style={{ flexDirection: "row" }}>

                    {/* อันที่ 1 */}
                    <View style={{ marginRight: 10 }}>
                        <Image style={{ width: 250, height: 150 }} source={{ uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" }} />
                        <view style={{ backgorundcolor: "black1", width: 250, height: 50, opacity: 0.7, padding: 10, marginTop: -50, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <text style={{ fontsize: 20, color: "white" }}>Tour in some where</text>
                        </view>
                    </View>

                    {/* อัน 2ที่ */}
                    <View style={{ marginRight: 10 }}>
                        <image style={{ width: 250, height: 150 }} source={{ uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" }} />
                        <view style={{ backgorundcolor: "black1", width: 250, height: 50, opacity: 0.7, padding: 10, marginTop: -50, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <text style={{ fontsize: 20, color: "white" }}>Tour in some where</text>
                        </view>
                    </View>

                    {/* อันที่ 3 */}
                    <View style={{ marginRight: 10 }}>
                        <image style={{ width: 250, height: 150 }} source={{ uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" }} />
                        <view style={{ backgorundcolor: "black1", width: 250, height: 50, opacity: 0.7, padding: 10, marginTop: -50, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <text style={{ fontsize: 20, color: "white" }}>Tour in some where</text>
                        </view>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}


