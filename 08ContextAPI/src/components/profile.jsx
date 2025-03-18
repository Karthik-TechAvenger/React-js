import React, { useContext } from "react";
import UserContext from "../context/userContext";

function profile() {
  const { user } = useContext(UserContext);
  if (!user) return <h1>Not logged in</h1>;
  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
    </div>
  );
}

export default profile;
