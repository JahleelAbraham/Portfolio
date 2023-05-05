import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./portfolio/Home";

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
