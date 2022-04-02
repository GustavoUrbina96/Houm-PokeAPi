import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "../navigation/NavBar";
import sections from "./SectionsRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {sections.map((section) => {
          return (
            <Route
              path={section.path}
              element={section.component}
              key={section.path}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
