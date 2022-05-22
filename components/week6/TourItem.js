import React from "react";
import { View } from "react-native";

export default function TourItem(props) {
    return (
        <View style={{ marginRight: 10 }}>
            <image style={{ width: 250, height: 150 }} source={{ uri: props.item.uri }} />
            <view style={{ backgorundcolor: "black1", width: 250, height: 50, opacity: 0.7, padding: 10, marginTop: -50, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                <text style={{ fontsize: 20, color: "white" }}>{props.item.title}</text>
            </view>
        </View>
    );
}
