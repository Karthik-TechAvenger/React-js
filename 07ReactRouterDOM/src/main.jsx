import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router";
import App from "./app";
import { createBrowserRouter } from "react-router";
import { createRoutesFromElements } from "react-router";
import Layout from "./components/layout";
import Home from "./components/home";
import About from "./components/about";
import "./index.css";
import Github from "./components/github";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about/" element={<About />} />
      <Route path="user/" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>
      <Route loader path="github" element={<Github />} />
      <Route path="*" element={<div>Not found</div>} />
    </Route>
  )
);

const root = document.getElementById("root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
