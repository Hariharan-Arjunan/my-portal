import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Crud from "../pages/Crud/Crud";

const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Crud />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteConfig;
