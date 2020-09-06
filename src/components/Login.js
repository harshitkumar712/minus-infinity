import React, { useState } from "react";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setUser(username);
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form className="ui form" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        <button className="ui button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
