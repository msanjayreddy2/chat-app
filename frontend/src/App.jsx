import { useState } from "react";
import "./App.css";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <Signup /> */}
      {/* <Login /> */}
      <Home />
    </div>
  );
}

export default App;
