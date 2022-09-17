import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import FeedPost from "./src/components/FeedPost";
import Post from "./src/components/Post";
import CreatePostScreen from "./src/screens/CreatePostScreen";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CreatePostScreen />
      {/* <HomeScreen /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
