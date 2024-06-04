import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import MoveToTopBtn from "../componet/home/common/MoveToTopBtn";

function Layout() {
  return (
    <div>
      <MoveToTopBtn />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
