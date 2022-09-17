import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FeedPost from "../components/FeedPost";

import { postData } from "../../assets/data/posts";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <>
      <FeedPost post={postData} />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
