import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

class Layout extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <div style={{ flex: 1, background: "#fff" }}>
          <Navbar />
          <div style={{ padding: "20px" }}>
            <Outlet /> 
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
