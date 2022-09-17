import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Book() {
  const [products, setProducts] = useState([
    { id: 1, name: "พัฒนา Application ด้วย React และ React Native", price: 330, image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-1.jpg", },
    { id: 2, name: "พัฒนาเว็บแอพพลิเคชันด้วย Firebase ร่วมกับ React", price: 229, image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-2.jpg", },
    { id: 3, name: "พัฒนา Web Apps ด้วย React Bootstrap + Redux", price: 349, image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-3.jpg", },
  ]);
  const navigation = useNavigation

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        numColumns={1}
        keyExtractor={item => (item.id.toString())}
        renderItem={({ item, index }) => {
          return (
            // <Text>{item.name}</Text>   ไม่ใช้
            <TouchableOpacity
              style={{ borderRadius: 10, backgroundColor: "white", margin: 5, padding: 10, flex: 1, elevation: 5, }}
              onPress={() => { navigation.naviagte("BookDetail", {"item":item}) }}
            >
        <View style={{ flexDirection: "row" }}>
          <Image style={{ flex: 1, resizeMode: "contain", aspectRatio: 1 / 1 }} source={{ uri: item.image }} />
        </View>
        <Text style={{ fontSize: 20, height: 70, marginVertical: 10 }}> {item.name} </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "green", fontSize: 20 }}>{item.price}</Text>
          <Text style={{ paddingTop: 6 }}> บาท</Text>
        </View>
      </TouchableOpacity>

      );
        }}
      />
    </View>
  );
}
