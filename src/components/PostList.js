import React from "react";
import Post from "./Post";

const PostList = ({ posts }) => {
  return posts.map((p, i) => <Post p={p} key={i} />);
};

export default PostList;
