import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Kids from "./pages/Kids";
import Login from "./pages/Login";
import Reg from "./pages/Reg";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Cart from "./pages/Cart";
import CreateProduct from "./pages/Product/CreateProduct";
import MensPro from "./pages/MensPro";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Reg" element={<Reg />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Cart" element={<Cart />} />

        {/* product */}
        <Route path="/admin/createProduct" element={<CreateProduct />} />
        <Route path="/MensPro" element={<MensPro />} />

      </Routes>
    </div>
  );
};

export default AllRoutes;
