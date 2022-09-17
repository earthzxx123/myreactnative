import React from "react";
import { Alert, TouchableOpacity, View, Modal } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import File from "../../helpers/File";
import ImageViewer from 'react-native-image-zoom-viewer';

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
      <TouchableOpacity onPress={() => { setModalVisible(true); }} ></TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <Image style={{ flex: 1, resizeMode: "contain", aspectRatio: 1 / 1 }} source={{ uri: item.image }} />
        </View>
      </TouchableOpacity>
      
      
      <Text style={{ fontSize: 20, height: 70, marginVertical: 10 }}> {item.name} </Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "green", fontSize: 20 }}>{item.price}</Text>
        <Text style={{ paddingTop: 6 }}> บาท</Text>
      </View>
      <Modal visible={modalVisible} transparent={true} onRequestClose={() => { setModalVisible(false); }} >
      <ImageViewer imageUrls={[{ url: book.image, props: { } }]}
          enableSwipeDown={true}
          onCancel={()=>{ console.log("SwipeDown"); setModalVisible(false); }}
          //onSave={(uri)=>{ File.download(uri); alert("Save File Already!!!!"); }}
          />
  </Modal>

    </View >
  );}}

