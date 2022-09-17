import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import LikeImage from "../../../assets/images/like.png";

interface PostProps {
  profileImage?: string;
  userName: string;
  createdAt: string;
  image?: string;
  description?: string;
  numberOfLikes: number;
  numberOfShares: number;
}

export const Post: React.FC<PostProps> = ({
  profileImage,
  userName,
  createdAt,
  image,
  description,
  numberOfLikes,
  numberOfShares,
}) => {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <View style={styles.userInfoContainer}>
          <Text style={styles.username}>{userName}</Text>
          <Text style={styles.subTitle}>{createdAt}</Text>
        </View>
        <Entypo
          name="dots-three-horizontal"
          size={18}
          color="gray"
          style={styles.icon}
        />
      </View>
      {description && <Text style={styles.description}>{description}</Text>}

      {image && <Image source={{ uri: image }} style={styles.postImage} />}

      <View style={styles.footer}>
        <View style={styles.statsRow}>
          <Image source={LikeImage} style={styles.likedIcon} />
          <Text style={styles.numberOfLikes}>
            King James and {numberOfLikes} others
          </Text>
          <Text style={styles.numberOfShares}>{numberOfShares} shares</Text>
        </View>
        <View style={styles.buttonRow}>
          {/* Like button */}
          <View style={styles.iconButton}>
            <AntDesign name="like2" size={18} color="gray" />
            <Text style={styles.iconButtonText}>Like</Text>
          </View>

          {/* Comment button */}
          <View style={styles.iconButton}>
            <FontAwesome5 name="comment-alt" size={16} color="gray" />
            <Text style={styles.iconButtonText}>Comment</Text>
          </View>

          {/* Share button */}
          <View style={styles.iconButton}>
            <MaterialCommunityIcons
              name="share-outline"
              size={18}
              color="gray"
            />
            <Text style={styles.iconButtonText}>Share</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    width: "100%",
    marginVertical: 5,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    width: "100%",
  },
  userInfoContainer: {},
  icon: {
    marginLeft: "auto",
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontWeight: "600",
  },
  subTitle: {
    color: "gray",
  },
  // body
  description: {
    lineHeight: 20,
    letterSpacing: 0.3,
    paddingHorizontal: 10,
  },
  postImage: {
    width: "100%",
    aspectRatio: 1,
    marginTop: 10,
  },
  footer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
    paddingBottom: 10,
  },
  likedIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  numberOfLikes: {
    color: "gray",
  },
  numberOfShares: {
    marginLeft: "auto",
    color: "gray",
  },
  // buttom row
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButtonText: {
    fontWeight: "600",
    color: "gray",
    marginLeft: 5,
  },
});
