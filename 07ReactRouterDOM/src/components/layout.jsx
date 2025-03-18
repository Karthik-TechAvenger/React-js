import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";

function layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default layout;
