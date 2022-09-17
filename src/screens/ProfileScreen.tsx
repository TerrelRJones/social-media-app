import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { ScreenProps } from "../../@types/navigation";

interface ProfileScreenProps extends ScreenProps<"ProfileScreen"> {}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ route, navigation }) => {
  const { id } = route.params;
  const { goBack } = navigation;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <Text>ProfileScreen: {id}</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
