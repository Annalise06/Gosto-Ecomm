import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import ExampleComponent from "../Product/Modal";
import { Details } from "../details/Details";

const Pages = () => {
  return (
    <div
      className="bg-gray-100"
      // style={{
      //   backgroundImage: "url(/bg-dot.png)",
      // }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path='/cart/:id' element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Pages;
