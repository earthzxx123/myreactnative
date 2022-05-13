import React, { useState } from "react";
import { View, Botton, Text, TextInput, TouchableOpacity } from "react-native";

export default function Bmi() {
    const [weight, Setweight] = useState('70');
    const [height, SetHeight] = useState('170');
    const [bmi, SetBmi] = useState('0');

    console.log("STATE : ", weight, height, bmi)

    const onPressButton = () => {
        console.log("PRESS!!!");
        let output = weight / (height / 100);
        SetBmi(output.toFixed(2));
        // console.log("BMI ( เก่า )", Bmi );
        // console.log("BMI ( ใหม่ )", output );
    }

    return (
        <View>
            {/* ก้อนที่ */}
            <View style={{ backgroundColor: "white", padding: 20, marginVertical: 10, height: 150, justifyContent: "space-around" }}>
                <Text style={{ fontSize: 20 }}>Weight (km.)</Text>
                <TextInput value={weight}
                    style={{ fontSize: 20 }}
                    keyboardType="numeric"
                    placeholder="Inout your Weight"
                    // onChangeText={(newWeight) => setWeight(newWeight)}
                    onChangeText={function (newWeight) {
                        setWeight(newWeight)
                    }}
                />
            </View>

            {/* ก้อนที่2 */}
            <View style={{ backgroundColor: "white", padding: 20, marginVertical: 10, height: 150, justifyContent: "space-around" }}>
                <Text style={{ fontSize: 20 }}>Height (cm.)</Text>
                <TextInput value={height}
                    style={{ fontSize: 20 }}
                    keyboardType="numeric"
                    placeholder="Inout your Height" />
            </View>

            {/* ก้อนที่3 */}
            <View style={{ flexDirection: "row", marginVertical: 10, height: 100, justifyContent: "center", alignItems: "center" }}>
                {/* ซ้าย */}
                <View style={{ flex: 1, backgroundColor: "white", marginRight: 10 }}>
                    <Text style={{ fontSize: 20 }}>{bmi}</Text>
                </View>
                {/* ขวา */}
                <View style={{ flex: 1, backgroundColor: "white", marginLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Normall</Text>
                </View>
            </View>
            <Botton title="Calculate" onPres={onPressButton} />
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}
