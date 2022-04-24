import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Carts from "./pages/Carts";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Carts />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
