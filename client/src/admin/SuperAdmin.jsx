// import React, { useState } from 'react';
// import { 
//   LayoutDashboard, 
//   ShoppingBag, 
//   Users, 
//   BarChart3, 
//   Settings, 
//   Menu, 
//   X, 
//   Bell, 
//   Search,
//   ArrowUpRight,
//   ArrowDownRight
// } from 'lucide-react';

// const AdminDashboard = () => {

//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const addAdmin = ()=>{
//     console.log("addAdmin");

    
//   }

//   const stats = [
//     { title: 'Total Revenue', value: '$45,231.89', trend: '+20.1%', positive: true },
//     { title: 'Sales', value: '+2350', trend: '+180.1%', positive: true },
//     { title: 'Active Users', value: '+12,234', trend: '+19%', positive: true },
//     { title: 'Active Now', value: '+573', trend: '-4%', positive: false },
//   ];

//   const recentOrders = [
//     { id: '#3021', customer: 'John Doe', product: 'Leather Watch', amount: '$230.00', status: 'Delivered' },
//     { id: '#3022', customer: 'Sarah Smith', product: 'Running Shoes', amount: '$120.00', status: 'Pending' },
//     { id: '#3023', customer: 'Mike Johnson', product: 'Wireless Earbuds', amount: '$85.00', status: 'Shipped' },
//     { id: '#3024', customer: 'Emma Wilson', product: 'Smart Home Hub', amount: '$199.00', status: 'Delivered' },
//   ];

//   return (
//     <div className="flex h-screen bg-slate-50 font-sans text-slate-900">
//       {/* Mobile Sidebar Overlay */}
//       <div className={`fixed inset-0 z-40 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}>
//         <div className="fixed inset-0 bg-slate-600/50 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
//       </div>

//       {/* Sidebar */}
//       <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
//         <div className="flex items-center gap-2 px-6 h-16 border-b border-slate-100">
//           <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
//             <ShoppingBag className="text-white w-5 h-5" />
//           </div>
//           <span className="text-xl font-bold tracking-tight">ShopAdmin</span>
//         </div>

//         <nav className="p-4 space-y-1">
//           <SidebarItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active />
//           <SidebarItem icon={<ShoppingBag size={20}/>} label="Products" />
//           <SidebarItem icon={<Users size={20}/>} label="Customers" />
//           <SidebarItem icon={<BarChart3 size={20}/>} label="Analytics" />
//           <button onClick={addAdmin}>Add Admin</button>
//           <div className="pt-4 mt-4 border-t border-slate-100">
//             <SidebarItem icon={<Settings size={20}/>} label="Settings" />
//           </div>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
//         {/* Top Header */}
//         <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 shrink-0">
//           <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 hover:bg-slate-100 rounded-lg">
//             <Menu size={24} />
//           </button>
          
//           <div className="hidden md:flex items-center bg-slate-100 rounded-full px-4 py-2 w-96">
//             <Search size={18} className="text-slate-400" />
//             <input type="text" placeholder="Search orders..." className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full" />
//           </div>

//           <div className="flex items-center gap-4">
//             <button className="relative p-2 text-slate-400 hover:text-indigo-600 transition-colors">
//               <Bell size={22} />
//               <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
//             </button>
//             <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
//               <img src="https://ui-avatars.com/api/?name=Admin+User&background=6366f1&color=fff" alt="User" />
//             </div>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <main className="flex-1 overflow-y-auto p-4 lg:p-8">
//           <div className="max-w-7xl mx-auto space-y-8">
            
//             {/* Page Title */}
//             <div>
//               <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
//               <p className="text-slate-500 text-sm">Welcome back, here is what's happening today.</p>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               {stats.map((stat, idx) => (
//                 <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
//                   <div className="flex justify-between items-start">
//                     <p className="text-sm font-medium text-slate-500">{stat.title}</p>
//                     {stat.positive ? 
//                       <ArrowUpRight className="text-emerald-500" size={18} /> : 
//                       <ArrowDownRight className="text-rose-500" size={18} />
//                     }
//                   </div>
//                   <div className="mt-2 flex items-baseline gap-2">
//                     <h3 className="text-2xl font-bold">{stat.value}</h3>
//                     <span className={`text-xs font-semibold ${stat.positive ? 'text-emerald-600' : 'text-rose-600'}`}>
//                       {stat.trend}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Recent Orders Table */}
//             <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
//               <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
//                 <h2 className="font-bold text-slate-800">Recent Orders</h2>
//                 <button className="text-indigo-600 text-sm font-medium hover:underline">View All</button>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left">
//                   <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
//                     <tr>
//                       <th className="px-6 py-4 font-semibold">Order ID</th>
//                       <th className="px-6 py-4 font-semibold">Customer</th>
//                       <th className="px-6 py-4 font-semibold">Product</th>
//                       <th className="px-6 py-4 font-semibold">Amount</th>
//                       <th className="px-6 py-4 font-semibold">Status</th> 
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-slate-100">
//                     {recentOrders.map((order, idx) => (
//                       <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
//                         <td className="px-6 py-4 text-sm font-medium text-slate-900">{order.id}</td>
//                         <td className="px-6 py-4 text-sm text-slate-600">{order.customer}</td>
//                         <td className="px-6 py-4 text-sm text-slate-600">{order.product}</td>
//                         <td className="px-6 py-4 text-sm text-slate-900 font-semibold">{order.amount}</td>
//                         <td className="px-6 py-4">
//                           <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                             order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' :
//                             order.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
//                             'bg-blue-100 text-blue-700'
//                           }`}>
//                             {order.status}
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// // Helper Component for Sidebar Items
// const SidebarItem = ({ icon, label, active = false }) => (
//   <a href="#" className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
//     active ? 'bg-indigo-50 text-indigo-600 font-semibold' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
//   }`}>
//     {icon}
//     <span className="text-sm">{label}</span>
//   </a>
// );

// export default AdminDashboard;





















// import { useState } from "react";
// import {
//   Menu,
//   LayoutDashboard,
//   Users,
//   ShoppingCart,
//   Settings,
//   Package
// } from "lucide-react";

// import AdminSignup from "./AdminSignup";
// import AddProduct from "./AddProduct";
// import UsersTable from "./UsersTable";
// import ProductsTable from "./ProductsTable";

// export default function AdminDashboard() {
//   const [open, setOpen] = useState(false);
//   const [activePage, setActivePage] = useState("dashboard");

//   return (
//     <div className="min-h-screen bg-gray-100 flex overflow-hidden">
//       {/* ================= Sidebar ================= */}
//       <aside
//         className={`fixed md:relative z-40 top-0 left-0 h-screen w-64 bg-white shadow-xl transition-transform duration-300
//         ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
//       >
//         <div className="h-16 flex items-center px-6 text-2xl font-bold text-indigo-600 border-b">
//           Super Admin
//         </div>

//         <nav className="px-4 py-6 space-y-2">
//           <SidebarItem
//             icon={<LayoutDashboard size={20} />}
//             label="Dashboard"
//             active={activePage === "dashboard"}
//             onClick={() => {
//               setActivePage("dashboard");
//               setOpen(false);
//             }}
//           />

//           <SidebarItem
//             icon={<Users size={20} />}
//             label="Add Admin"
//             active={activePage === "addAdmin"}
//             onClick={() => {
//               setActivePage("addAdmin");
//               setOpen(false);
//             }}
//           />

//           <SidebarItem
//             icon={<Package size={20} />}
//             label="Add Product"
//             active={activePage === "addProduct"}
//             onClick={() => {
//               setActivePage("addProduct");
//               setOpen(false);
//             }}
//           />

//           <SidebarItem
//             icon={<Users size={20} />}
//             label="All Users"
//             active={activePage === "users"}
//             onClick={() => {
//               setActivePage("users");
//               setOpen(false);
//             }}
//           />

//           <SidebarItem
//             icon={<ShoppingCart size={20} />}
//             label="All Products"
//             active={activePage === "productsTable"}
//             onClick={() => {
//               setActivePage("productsTable");
//               setOpen(false);
//             }}
//           />

//           <SidebarItem
//             icon={<ShoppingCart size={20} />}
//             label="Orders"
//             active={activePage === "orders"}
//             onClick={() => {
//               setActivePage("orders");
//               setOpen(false);
//             }}
//           />

//           <SidebarItem
//             icon={<Settings size={20} />}
//             label="Settings"
//             active={activePage === "settings"}
//             onClick={() => {
//               setActivePage("settings");
//               setOpen(false);
//             }}
//           />
//         </nav>
//       </aside>

//       {/* ================= Overlay (mobile) ================= */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/40 z-30 md:hidden"
//           onClick={() => setOpen(false)}
//         />
//       )}

//       {/* ================= Main Content ================= */}
//       <div className="flex-1 flex flex-col">
//         {/* ===== Topbar ===== */}
//         <header className="h-16 bg-white flex items-center justify-between px-6 shadow-sm">
//           <button
//             className="md:hidden text-gray-700"
//             onClick={() => setOpen(true)}
//           >
//             <Menu size={26} />
//           </button>

//           <h1 className="text-lg font-semibold text-gray-800">
//             {activePage === "dashboard" && "Dashboard Overview"}
//             {activePage === "addAdmin" && "Add Admin"}
//             {activePage === "addProduct" && "Add Product"}
//             {activePage === "users" && "Users"}
//             {activePage === "productsTable" && "All Products"}
//             {activePage === "orders" && "Orders"}
//             {activePage === "settings" && "Settings"}
//           </h1>

//           <img
//             src="https://i.pravatar.cc/40"
//             alt="admin"
//             className="w-9 h-9 rounded-full"
//           />
//         </header>

//         {/* ===== Page Content ===== */}
//         <main className="flex-1 p-8">
//           {activePage === "dashboard" && (
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//               <StatCard title="Total Users" value="1,240" />
//               <StatCard title="Orders" value="320" />
//               <StatCard title="Revenue" value="$12,500" />
//               <StatCard title="Pending Orders" value="18" />
//             </div>
//           )}

//           {activePage === "addAdmin" && <AdminSignup />}

//           {activePage === "addProduct" && <AddProduct />}

//           {activePage === "users" && <UsersTable />}

//           {/* ✅ PRODUCTS TABLE */}
//           {activePage === "productsTable" && <ProductsTable />}

//           {/* ===== Fallback ===== */}
//           {activePage !== "dashboard" &&
//             activePage !== "addAdmin" &&
//             activePage !== "addProduct" &&
//             activePage !== "users" &&
//             activePage !== "productsTable" && (
//               <div className="bg-white p-6 rounded-xl shadow text-gray-600">
//                 {activePage} page coming soon…
//               </div>
//             )}
//         </main>
//       </div>
//     </div>
//   );
// }

// /* ================= Reusable Components ================= */

// function SidebarItem({ icon, label, active, onClick }) {
//   return (
//     <div
//       onClick={onClick}
//       className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition
//       ${
//         active
//           ? "bg-indigo-600 text-white shadow"
//           : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
//       }`}
//     >
//       {icon}
//       <span className="font-medium">{label}</span>
//     </div>
//   );
// }

// function StatCard({ title, value }) {
//   return (
//     <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-300">
//       <p className="text-sm text-gray-500">{title}</p>
//       <h2 className="text-3xl font-bold text-gray-800 mt-3">{value}</h2>
//     </div>
//   );
// }
















// // AdminDashboard.jsx
// import { useState } from "react";
// import {
//   Menu,
//   LayoutDashboard,
//   Users,
//   ShoppingCart,
//   Settings,
//   Package
// } from "lucide-react";

// import AdminSignup from "./AdminSignup";
// import AddProduct from "./AddProduct";
// import UsersTable from "./UsersTable";
// import ProductsTable from "./ProductsTable";

// export default function AdminDashboard() {
//   const [open, setOpen] = useState(false);
//   const [activePage, setActivePage] = useState("dashboard");

//   return (
//     <div className="min-h-screen bg-gray-100 flex overflow-hidden">
//       {/* ================= Sidebar ================= */}
//       <aside
//         className={`fixed md:relative z-40 top-0 left-0 h-screen w-64 bg-white shadow-xl transition-transform duration-300 flex flex-col
//         ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
//       >
//         <div className="h-16 flex items-center px-6 text-2xl font-bold text-indigo-600 border-b flex-shrink-0">
//           Super Admin
//         </div>

//         <nav className="px-4 py-6 space-y-2 overflow-y-auto flex-1">
//           <SidebarItem
//             icon={<LayoutDashboard size={20} />}
//             label="Dashboard"
//             active={activePage === "dashboard"}
//             onClick={() => { setActivePage("dashboard"); setOpen(false); }}
//           />
//           <SidebarItem
//             icon={<Users size={20} />}
//             label="Add Admin"
//             active={activePage === "addAdmin"}
//             onClick={() => { setActivePage("addAdmin"); setOpen(false); }}
//           />
//           <SidebarItem
//             icon={<Package size={20} />}
//             label="Add Product"
//             active={activePage === "addProduct"}
//             onClick={() => { setActivePage("addProduct"); setOpen(false); }}
//           />
//           <SidebarItem
//             icon={<Users size={20} />}
//             label="All Users"
//             active={activePage === "users"}
//             onClick={() => { setActivePage("users"); setOpen(false); }}
//           />
//           <SidebarItem
//             icon={<ShoppingCart size={20} />}
//             label="All Products"
//             active={activePage === "productsTable"}
//             onClick={() => { setActivePage("productsTable"); setOpen(false); }}
//           />
//           <SidebarItem
//             icon={<ShoppingCart size={20} />}
//             label="Orders"
//             active={activePage === "orders"}
//             onClick={() => { setActivePage("orders"); setOpen(false); }}
//           />
//           <SidebarItem
//             icon={<Settings size={20} />}
//             label="Settings"
//             active={activePage === "settings"}
//             onClick={() => { setActivePage("settings"); setOpen(false); }}
//           />
//         </nav>
//       </aside>

//       {/* ================= Overlay (mobile) ================= */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/40 z-30 md:hidden"
//           onClick={() => setOpen(false)}
//         />
//       )}

//       {/* ================= Main Content ================= */}
//       <div className="flex-1 flex flex-col">
//         {/* ===== Topbar ===== */}
//         <header className="h-16 bg-white flex items-center justify-between px-6 shadow-sm">
//           <button
//             className="md:hidden text-gray-700"
//             onClick={() => setOpen(true)}
//           >
//             <Menu size={26} />
//           </button>

//           <h1 className="text-lg font-semibold text-gray-800">
//             {activePage === "dashboard" && "Dashboard Overview"}
//             {activePage === "addAdmin" && "Add Admin"}
//             {activePage === "addProduct" && "Add Product"}
//             {activePage === "users" && "Users"}
//             {activePage === "productsTable" && "All Products"}
//             {activePage === "orders" && "Orders"}
//             {activePage === "settings" && "Settings"}
//           </h1>

//           <img
//             src="https://i.pravatar.cc/40"
//             alt="admin"
//             className="w-9 h-9 rounded-full"
//           />
//         </header>

//         {/* ===== Page Content ===== */}
//         <main className="flex-1 p-6 md:p-8 overflow-y-auto">
//           {/* Dashboard */}
//           {activePage === "dashboard" && (
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//               <StatCard title="Total Users" value="1,240" />
//               <StatCard title="Orders" value="320" />
//               <StatCard title="Revenue" value="$12,500" />
//               <StatCard title="Pending Orders" value="18" />
//             </div>
//           )}

//           {/* Add Admin */}
//           {activePage === "addAdmin" && <AdminSignup />}

//           {/* Add Product */}
//           {activePage === "addProduct" && <AddProduct />}

//           {/* Users Table */}
//           {activePage === "users" && <UsersTable />}

//           {/* Products Table */}
//           {activePage === "productsTable" && <ProductsTable />}

//           {/* Fallback */}
//           {activePage !== "dashboard" &&
//             activePage !== "addAdmin" &&
//             activePage !== "addProduct" &&
//             activePage !== "users" &&
//             activePage !== "productsTable" && (
//               <div className="bg-white p-6 rounded-xl shadow text-gray-600">
//                 {activePage} page coming soon…
//               </div>
//             )}
//         </main>
//       </div>
//     </div>
//   );
// }

// /* ================= Reusable Components ================= */

// function SidebarItem({ icon, label, active, onClick }) {
//   return (
//     <div
//       onClick={onClick}
//       className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300
//       ${active
//         ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg scale-105"
//         : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 hover:scale-105"}
//       `}
//     >
//       {icon}
//       <span className="font-medium">{label}</span>
//     </div>
//   );
// }

// function StatCard({ title, value }) {
//   return (
//     <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
//       <p className="text-sm text-gray-500">{title}</p>
//       <h2 className="text-3xl font-bold text-gray-800 mt-3">{value}</h2>
//     </div>
//   );
// }























// AdminDashboard.jsx
import { useState } from "react";
import {
  Menu,
  LayoutDashboard,
  Users,
  ShoppingCart,
  Settings,
  Package,
  X,
  Bell,
  Search,
  TrendingUp,
  DollarSign,
  ShoppingBag,
  UserPlus
} from "lucide-react";

import AdminSignup from "./AdminSignup";
import AddProduct from "./AddProduct";
import UsersTable from "./UsersTable";
import ProductsTable from "./ProductsTable";

export default function AdminDashboard() {
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex overflow-hidden">
      {/* ================= Sidebar ================= */}
      <aside
        className={`fixed md:relative z-40 top-0 left-0 h-screen w-72 bg-white shadow-2xl transition-transform duration-300 flex flex-col
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Logo Section */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-gray-100 flex-shrink-0 bg-gradient-to-r from-indigo-600 to-blue-600">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <ShoppingBag className="text-indigo-600" size={22} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Admin Panel</h1>
              <p className="text-xs text-blue-100">Super Administrator</p>
            </div>
          </div>
          <button
            className="md:hidden text-white hover:bg-white/20 p-1.5 rounded-lg transition-colors"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6 space-y-1.5 overflow-y-auto flex-1">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-3">
            Main Menu
          </div>
          
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            active={activePage === "dashboard"}
            onClick={() => { setActivePage("dashboard"); setOpen(false); }}
          />
          <SidebarItem
            icon={<UserPlus size={20} />}
            label="Add Admin"
            active={activePage === "addAdmin"}
            onClick={() => { setActivePage("addAdmin"); setOpen(false); }}
          />
          <SidebarItem
            icon={<Package size={20} />}
            label="Add Product"
            active={activePage === "addProduct"}
            onClick={() => { setActivePage("addProduct"); setOpen(false); }}
          />
          
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-3 mt-6">
            Management
          </div>
          
          <SidebarItem
            icon={<Users size={20} />}
            label="All Users"
            active={activePage === "users"}
            onClick={() => { setActivePage("users"); setOpen(false); }}
          />
          <SidebarItem
            icon={<ShoppingCart size={20} />}
            label="All Products"
            active={activePage === "productsTable"}
            onClick={() => { setActivePage("productsTable"); setOpen(false); }}
          />
          <SidebarItem
            icon={<ShoppingBag size={20} />}
            label="Orders"
            active={activePage === "orders"}
            onClick={() => { setActivePage("orders"); setOpen(false); }}
          />
          
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-3 mt-6">
            System
          </div>
          
          <SidebarItem
            icon={<Settings size={20} />}
            label="Settings"
            active={activePage === "settings"}
            onClick={() => { setActivePage("settings"); setOpen(false); }}
          />
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-100 flex-shrink-0">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-4 border border-indigo-100">
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/40"
                alt="admin"
                className="w-10 h-10 rounded-full border-2 border-white shadow-md"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">Admin User</p>
                <p className="text-xs text-gray-500 truncate">admin@store.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* ================= Overlay (mobile) ================= */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ================= Main Content ================= */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* ===== Topbar ===== */}
        <header className="h-20 bg-white flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-sm border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <button
              className="md:hidden text-gray-700 hover:bg-gray-100 p-2 rounded-lg transition-colors"
              onClick={() => setOpen(true)}
            >
              <Menu size={24} />
            </button>

            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-800">
                {activePage === "dashboard" && "Dashboard Overview"}
                {activePage === "addAdmin" && "Add New Admin"}
                {activePage === "addProduct" && "Add New Product"}
                {activePage === "users" && "User Management"}
                {activePage === "productsTable" && "Product Inventory"}
                {activePage === "orders" && "Order Management"}
                {activePage === "settings" && "System Settings"}
              </h1>
              <p className="text-sm text-gray-500 mt-0.5">
                {activePage === "dashboard" && "Welcome back! Here's what's happening today"}
                {activePage === "addAdmin" && "Create a new administrator account"}
                {activePage === "addProduct" && "Add products to your inventory"}
                {activePage === "users" && "View and manage all users"}
                {activePage === "productsTable" && "Manage your product catalog"}
                {activePage === "orders" && "Track and manage customer orders"}
                {activePage === "settings" && "Configure system preferences"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Bar - Hidden on mobile */}
            <div className="hidden lg:flex items-center bg-gray-100 rounded-xl px-4 py-2.5 w-64">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none outline-none ml-2 text-sm text-gray-700 placeholder-gray-400 w-full"
              />
            </div>

            {/* Notifications */}
            <button className="relative p-2.5 hover:bg-gray-100 rounded-xl transition-colors">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            {/* Profile */}
            <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-gray-200">
              <img
                src="https://i.pravatar.cc/40"
                alt="admin"
                className="w-10 h-10 rounded-full border-2 border-indigo-100 shadow-sm"
              />
              <div className="hidden lg:block">
                <p className="text-sm font-semibold text-gray-800">Admin User</p>
                <p className="text-xs text-gray-500">Super Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* ===== Page Content ===== */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {/* Dashboard */}
          {activePage === "dashboard" && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard
                  title="Total Users"
                  value="1,240"
                  change="+12.5%"
                  trend="up"
                  icon={<Users size={24} />}
                  color="blue"
                />
                <StatCard
                  title="Total Orders"
                  value="320"
                  change="+8.2%"
                  trend="up"
                  icon={<ShoppingCart size={24} />}
                  color="green"
                />
                <StatCard
                  title="Revenue"
                  value="$12,500"
                  change="+15.3%"
                  trend="up"
                  icon={<DollarSign size={24} />}
                  color="purple"
                />
                <StatCard
                  title="Pending Orders"
                  value="18"
                  change="-3.1%"
                  trend="down"
                  icon={<TrendingUp size={24} />}
                  color="orange"
                />
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <QuickActionCard
                    icon={<UserPlus size={20} />}
                    label="Add Admin"
                    onClick={() => setActivePage("addAdmin")}
                  />
                  <QuickActionCard
                    icon={<Package size={20} />}
                    label="Add Product"
                    onClick={() => setActivePage("addProduct")}
                  />
                  <QuickActionCard
                    icon={<Users size={20} />}
                    label="View Users"
                    onClick={() => setActivePage("users")}
                  />
                  <QuickActionCard
                    icon={<ShoppingCart size={20} />}
                    label="View Products"
                    onClick={() => setActivePage("productsTable")}
                  />
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  <ActivityItem
                    action="New order placed"
                    description="Order #1234 - $299.99"
                    time="2 minutes ago"
                    color="green"
                  />
                  <ActivityItem
                    action="New user registered"
                    description="john.doe@example.com"
                    time="15 minutes ago"
                    color="blue"
                  />
                  <ActivityItem
                    action="Product updated"
                    description="Wireless Headphones - Stock updated"
                    time="1 hour ago"
                    color="purple"
                  />
                  <ActivityItem
                    action="Order shipped"
                    description="Order #1233 - Delivered to customer"
                    time="2 hours ago"
                    color="orange"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Add Admin */}
          {activePage === "addAdmin" && (
            <div className="max-w-2xl mx-auto">
              <AdminSignup />
            </div>
          )}

          {/* Add Product */}
          {activePage === "addProduct" && (
            <div className="max-w-4xl mx-auto">
              <AddProduct />
            </div>
          )}

          {/* Users Table */}
          {activePage === "users" && <UsersTable />}

          {/* Products Table */}
          {activePage === "productsTable" && <ProductsTable />}

          {/* Fallback for other pages */}
          {activePage !== "dashboard" &&
            activePage !== "addAdmin" &&
            activePage !== "addProduct" &&
            activePage !== "users" &&
            activePage !== "productsTable" && (
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings size={32} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
                </h3>
                <p className="text-gray-500">This page is under construction</p>
              </div>
            )}
        </main>
      </div>
    </div>
  );
}

/* ================= Reusable Components ================= */

function SidebarItem({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200
      ${active
          ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-200"
          : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"}
      `}
    >
      <div className={`${active ? "scale-110" : ""} transition-transform`}>
        {icon}
      </div>
      <span className="font-medium text-sm">{label}</span>
    </div>
  );
}

function StatCard({ title, value, change, trend, icon, color }) {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600"
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClasses[color]} shadow-lg`}>
          <div className="text-white">
            {icon}
          </div>
        </div>
        <span className={`text-sm font-semibold px-2.5 py-1 rounded-full ${
          trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}>
          {change}
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-1">{title}</p>
      <h2 className="text-3xl font-bold text-gray-800">{value}</h2>
    </div>
  );
}

function QuickActionCard({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 group"
    >
      <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <span className="font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">
        {label}
      </span>
    </button>
  );
}

function ActivityItem({ action, description, time, color }) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600"
  };

  return (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
      <div className={`w-2 h-2 rounded-full mt-2 ${colorClasses[color]}`}></div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-gray-800">{action}</p>
        <p className="text-sm text-gray-500 truncate">{description}</p>
      </div>
      <span className="text-xs text-gray-400 whitespace-nowrap">{time}</span>
    </div>
  );
}