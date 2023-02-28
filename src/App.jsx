import "./App.css";
import {Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      
    </>
  );
}

export default App;
