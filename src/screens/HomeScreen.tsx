import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FeedPost from "../components/FeedPost";

import { postData } from "../../assets/data/posts";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { AppParamList, ScreenProps } from "../../@types/navigation";

interface HomeScreenProps extends ScreenProps<"HomeScreen"> {}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={() => navigate("CreatePostScreen")}>
          <Text>Create Post</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("ProfileScreen", { id: "dsfsdfdsf" })}
        >
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
      <FeedPost post={postData} />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
