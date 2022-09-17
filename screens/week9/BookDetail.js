import React from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function BookDetail() {
  const route = useRoute();
  const { item } = route.params;
  const confirmDelete = () => {
    return Alert.alert(
      "ยืนยันการลบ?",
      "คุณแน่ใจหรือไม่ว่าลบรายการนี้?",
      [
        { text: "ยกเลิก", },
        { text: "ยืนยัน", onPress: () => { }, },
      ]
    );
  };
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row", width: 100, justifyContent: "space-around" }}>
          <TouchableOpacity onPress={() => { }}>
            <FontAwesome name="edit" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <FontAwesome name="trash" size={30} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ backgroundColor: "white", padding: 20, flex: 1 }} >
      <View style={{ flexDirection: "row" }}>
        <Image style={{ flex: 1, resizeMode: "contain", aspectRatio: 1 / 1 }} source={{ uri: item.image }} />
      </View>
      <Text style={{ fontSize: 20, height: 70, marginVertical: 10 }}> {item.name} </Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "green", fontSize: 20 }}>{item.price}</Text>
        <Text style={{ paddingTop: 6 }}> บาท</Text>
      </View>
    </View>
  );
}

