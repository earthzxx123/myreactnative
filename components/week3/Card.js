import react from "react";
import { View, Image, Text } from "react-native-web";

export default function Card() {
    return (
        <View style={{ padding: 20 }}>
            {/*ก้อนที่ 1 */}
            <View style={{ flexDirection: 'row' }}>
                <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require('../../assets/week3/profile-2.jpg')} />
                <View>
                    <Text style={{ fontsize: 20 }}>Steve Garett</Text>
                    <Text style={{ color: 'gray' }}>5 hours ago | 100K View</Text>
                </View>
            </View>
            {/*ก้อนที่2 */}
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Image style={{ flex: 1, resizeMode: 'cover', aspetRatio: 16 / 9 }} source={require('../../assets/week3/trip-2.jpg')} />
            </View>
            {/*ก้อนที่3 */}
            <View>
                <Text style={{ paddingHorizontal: 10 }}>Overseas Adventure Travel In Nepal</Text>
                <Text style={{ color: 'gray' }}>Andaz Tokyo Toranomon Hills is one of the newest luxury hotel in Tokyo. Located in one of the uprising areas of Tokyo </Text>
            </View>
        </View>
    )
}