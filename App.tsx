import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import Post from "./src/components/Post";

const post = {
  id: "p1",
  createdAt: "4m",
  User: {
    id: "u1",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    name: "TerrelRJones",
  },
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
  numberOfLikes: 432032,
  numberOfShares: 2,
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Post
        userName={post.User.name}
        profileImage={post.User.image}
        createdAt={post.createdAt}
        image={post.image}
        description={post.description}
        numberOfLikes={post.numberOfLikes}
        numberOfShares={post.numberOfShares}
      />

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
