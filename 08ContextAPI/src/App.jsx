import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login.jsx";
import Profile from "./components/profile.jsx";
import { UserContextProvider } from "./context/userContextProvider.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>React video for context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
