import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-web";
import MyIcon from "./MyIcon";

export default function femenu() {
    return (
        <View style={{ borderWidth: 1, borderColor: "gray", borderRadius: 10, margin: 20, padding: 20 }}>
            {/* ก้อนที่1 */}
            <View>
                <TextInput placeholder="What're you looking forr?  " />
            </View>

            {/* ก้อนที่2 */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' ,marginVertical:10}}>
                <MyIcon title='หัวใจ' name='heart' size={30} color="orange" />
                <MyIcon title='หัวใจ' name='heart' size={30} color="orange" />
                <MyIcon title='หัวใจ' name='heart' size={30} color="orange" />
                <MyIcon title='หัวใจ' name='heart' size={30} color="orange" />
            </View>

            {/* ก้อนที่3 */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <MyIcon title='หัวใจ' name='heart' size={30} color="orange" />
                <MyIcon title='หัวใจ' name='heart' size={30} color="orange" />
                <MyIcon title='หัวใจ' name='heart' size={30} color="orange" />
                <MyIcon title='หัวใจ' name='heart' size={30} color="orange" />
            </View>
        </View>
    );
}