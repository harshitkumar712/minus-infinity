import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

function App() {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = user || "Sociogo";
  }, [user]);

  function handleAddPost(newPost) {
    setPosts([newPost, ...posts]);
  }

  if (!user) {
    return <Login setUser={setUser} />;
  }
  return (
    <div>
      <div>
        <Header user={user} setUser={setUser} />
      </div>
      <div>
        <CreatePost user={user} handleAddPost={handleAddPost} />
      </div>
      <div>
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default App;
