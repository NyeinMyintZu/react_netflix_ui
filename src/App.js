import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Watch from "./components/pages/watch/Watch";
import Featured from "./components/featured/Featured";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
