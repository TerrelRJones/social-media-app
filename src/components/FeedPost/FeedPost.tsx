import { View, Text, FlatList, RefreshControl } from "react-native";
import React, { useCallback, useState } from "react";
import Post from "../Post";

interface FeedPostProps {
  post: any;
}

export const FeedPost: React.FC<FeedPostProps> = ({ post }) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  return (
    <>
      <FlatList
        data={post}
        // refreshControl={
        //   <RefreshControl
        //     enabled={false}
        //     size={10}
        //     refreshing={refreshing}
        //     onRefresh={onRefresh}
        //   />
        // }
        renderItem={({ item }) => (
          <Post
            userName={item.User.name}
            profileImage={item.User.image}
            createdAt={item.createdAt}
            image={item.image}
            description={item.description}
            numberOfLikes={item.numberOfLikes}
            numberOfShares={item.numberOfShares}
          />
        )}
      />
    </>
  );
};
