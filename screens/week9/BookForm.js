import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import UploadArea from "../../components/week12/UploadArea";
import { ScrollView, TextInput } from "react-native-gesture-handler";

export default function BookForm() {

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <text>ชื่อหนังสือ</text>
        <TextInput placeholder="ENter name ..." value={name} onChangeText={(text) => setName(text)} />
        <text>ราคา</text>
        <TextInput placeholder="ENter price ..." value={price} onChangeText={(text) => setPrice(text)} />
        <text>ลิ้งค์รูปภาพ</text>
        <TextInput placeholder="ENter image URL ..." value={image} onChangeText={(text) => setImage(text)} />

        <UploadArea image={image} setImage={setImage} />
      </ScrollView>
      <Botton title="save" color="tomato" onPress={saveBook} />
    </KeyboardAvoidingView>
  );
}
