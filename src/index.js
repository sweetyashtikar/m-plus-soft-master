import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Portfolio from "./components/Portfolio/Portfolio";
import LoginForm from "./Login/Login";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/loginform" element={<LoginForm />}></Route>
      <Route path="/porifolio" element={<Portfolio />}></Route>

    </Routes>
  </BrowserRouter>
);
