import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";

import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

interface CreatePostScreenProps {}

const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Vadim Savin",
};

const CreatePostScreen = () => {
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const onSubmit = () => {
    console.warn(description);
    setDescription("");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, { marginBottom: 10 }]}
      contentContainerStyle={{ flex: 1 }}
      keyboardVerticalOffset={10}
    >
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.profileImage} />
        <Text style={styles.userName}>{user.name}</Text>
        <Entypo
          onPress={pickImage}
          name="images"
          size={24}
          color="#000"
          style={styles.icon}
        />
      </View>
      <TextInput
        value={description}
        placeholder="What's going down?"
        multiline
        onChangeText={setDescription}
        style={styles.input}
      />
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => onSubmit()}>
          <View style={styles.btnStyle}>
            <Text style={styles.btnText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
    marginTop: Platform.OS === "android" ? 50 : undefined,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  userName: {
    fontWeight: "600",
  },
  input: {
    marginBottom: 20,
  },
  btnStyle: {
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
  },
  btnContainer: {
    marginTop: "auto",
  },
  icon: {
    marginLeft: "auto",
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
    alignSelf: "center",
  },
});
