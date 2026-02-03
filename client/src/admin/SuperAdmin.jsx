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






















import { useState } from "react";
import { Menu, LayoutDashboard, Users, ShoppingCart, Settings } from "lucide-react";
import AdminSignup from "./AdminSignup"; 
import AddProduct from "./AddProduct"; // ✅ fix import name (capitalized)

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
         Super Admin
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
            label="Add Admin"
            active={activePage === "addAdmin"}
            onClick={() => {
              setActivePage("addAdmin");
              setOpen(false);
            }}
          />

          <SidebarItem
            icon={<Users size={20} />}
            label="Add Products"
            active={activePage === "addProduct"}
            onClick={() => {
              setActivePage("addProduct");
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
            {activePage === "addAdmin" && "Add Admin"}
            {activePage === "addProduct" && "Add Product"}
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

          {activePage === "addAdmin" && <AdminSignup />}

          {activePage === "addProduct" && <AddProduct />} {/* ✅ show AddProduct form */}

          {activePage !== "dashboard" && activePage !== "addAdmin" && activePage !== "addProduct" && (
            <div className="bg-white p-6 rounded-xl shadow text-gray-600">
              {activePage} page coming soon…
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
