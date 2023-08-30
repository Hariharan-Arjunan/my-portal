import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/containers/Header/Header";

const FullPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default FullPage;
