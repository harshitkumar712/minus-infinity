import React, { useState, useRef } from "react";

const CreatePost = ({ user, handleAddPost }) => {
  const [post, setPost] = useState("");
  const [image, setImage] = useState(null);
  const refImage = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const feed = { post, image, user };
    handleAddPost(feed);
    console.log("run");
    setPost("");
    refImage.current.value = "";
  }
  return (
    <div>
      <h1>Spread Smile</h1>
      <form className="ui form " onSubmit={handleSubmit}>
        <input
          onChange={(e) => setPost(e.target.value)}
          type="text"
          value={post}
          placeholder="Enter caption"
        />
        <input
          type="file"
          ref={refImage}
          className="ui "
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button className="ui button " type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
