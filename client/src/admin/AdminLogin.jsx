import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../api/auth.api";

const AdminLogin = () => {

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Admin Login Data:", formData);
    // connect API here
      setLoading(true);

     try {
    const res = await adminLogin(formData);
        setLoading(false);
    const adminRole = res.data.admin.role;

    if (adminRole === "super-admin") {
      // Super Admin dashboard
      navigate("/superadmin");
    } else if (adminRole === "admin") {
      // Normal Admin dashboard
      navigate("/admindashboard");
    }
  } catch (err) {
    console.log("Admin Login Error:", err.response?.data || err.message);
  }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-slate-800">Admin Panel</h1>
          <p className="text-sm text-slate-500 mt-1">
            Secure login for administrators
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="admin@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Role
            </label>
            <select
              name="role"
              required
              value={formData.role || ""}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm 
               focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Role</option>
              <option value="super-admin">Super Admin</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Remember & Forgot */}
          {/* <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input type="checkbox" className="rounded border-slate-300" />
              Remember me
            </label>
            <a href="#" className="text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div> */}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium 
            hover:bg-indigo-700 transition duration-200 shadow-md"
          >
            Sign in as Admin
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-slate-400 mt-6">
          © 2026 Admin Dashboard. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
