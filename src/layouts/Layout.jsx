import React from "react";
import { Header, Footer } from "../components";

import "./Layout.scss";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
