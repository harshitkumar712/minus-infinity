import React from "react";

const Post = ({ p }) => {
  return (
    <div>
      <p>{p.post}</p>
      {p.image && <img alt="post" src={URL.createObjectURL(p.image)} />}
      <p>{p.user}</p>
    </div>
  );
};

export default Post;
