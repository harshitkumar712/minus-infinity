import React from "react";

const Header = ({ user, setUser }) => {
  return (
    <div>
      <h1>Welcome {user}</h1>
      <button onClick={() => setUser("")}>Log out</button>
    </div>
  );
};

export default Header;
