import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home/Home";
import database from "./firebase.js";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
