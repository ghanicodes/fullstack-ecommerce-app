
import { useState } from "react";
import { Menu, LayoutDashboard, Users, ShoppingCart, Settings } from "lucide-react";
import AdminSignup from "./AdminSignup"; 

export default function AdminDashboard() {
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-100 flex overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed md:relative z-40 top-0 left-0 h-screen w-64 bg-white shadow-xl transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="h-16 flex items-center px-6 text-2xl font-bold text-indigo-600 border-b">
          Admin Panel
        </div>

        <nav className="px-4 py-6 space-y-2">
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            active={activePage === "dashboard"}
            onClick={() => {
              setActivePage("dashboard");
              setOpen(false);
            }}
          />

          <SidebarItem
            icon={<Users size={20} />}
            label="Users"
            active={activePage === "users"}
            onClick={() => setActivePage("users")}
          />

          <SidebarItem
            icon={<ShoppingCart size={20} />}
            label="Orders"
            active={activePage === "orders"}
            onClick={() => setActivePage("orders")}
          />

          <SidebarItem
            icon={<Settings size={20} />}
            label="Settings"
            active={activePage === "settings"}
            onClick={() => setActivePage("settings")}
          />
        </nav>
      </aside>

      {/* Overlay (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-white flex items-center justify-between px-6 shadow-sm">
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
          </button>

          <h1 className="text-lg font-semibold text-gray-800">
            {activePage === "dashboard" && "Dashboard Overview"}
            {activePage === "users" && "Users"}
            {activePage === "orders" && "Orders"}
            {activePage === "settings" && "Settings"}
          </h1>

          <img
            src="https://i.pravatar.cc/40"
            alt="admin"
            className="w-9 h-9 rounded-full"
          />
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8">
          {activePage === "dashboard" && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard title="Total Users" value="1,240" />
              <StatCard title="Orders" value="320" />
              <StatCard title="Revenue" value="$12,500" />
              <StatCard title="Pending" value="18" />
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

/* ================= Components ================= */

function SidebarItem({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition
      ${active
        ? "bg-indigo-600 text-white shadow"
        : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"}`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-300">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-3xl font-bold text-gray-800 mt-3">{value}</h2>
    </div>
  );
}
  