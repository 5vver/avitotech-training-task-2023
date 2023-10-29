import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      MAIN LAYOUT
      <Outlet />
    </div>
  );
};

export default MainLayout;
