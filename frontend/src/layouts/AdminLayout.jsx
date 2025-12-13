// src/layouts/AdminLayout.jsx
import AdminSidebar from "../components/sidebar/AdminSidebar";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <main style={{ padding: "20px" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
