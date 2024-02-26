import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import MyFooter from "./components/MyFooter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div className=" min-h-screen bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
        <Outlet />
      </div>
      <MyFooter />
    </>
  );
}

export default App;
