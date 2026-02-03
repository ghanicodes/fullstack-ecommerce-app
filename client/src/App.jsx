import React from "react";
import Signup  from "./Signup";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router";
import AdminLogin from "./admin/AdminLogin";
import SuperAdmin from "./admin/SuperAdmin";
import AdminDashboard from "./admin/AdminDashboard";
function App() {

  return (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/superadmin" element={<SuperAdmin />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
    </Routes>
  </BrowserRouter>

  )}
export default App
