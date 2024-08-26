import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppLink from "./AppLink";
import MyRoutes from "./Routes/MyRoutes";

function App() {
  return (
    <>
      <AppLink />
      <MyRoutes />
    </>
  );
}

export default App;
