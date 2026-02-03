// import { useState } from "react";
// import { adminSignup } from "../api/auth.api"; // your signup API function

// const AdminSignup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     age: "",
//     // role: "",
//     gender: "",
//     phoneNo: "",
//     address: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await adminSignup(formData); // call your backend
//       console.log("Admin Signup Success:", res.data);
//       alert("Admin Signup Successful");
//       setFormData({
//         name: "",
//         email: "",
//         password: "",
//         age: "",
//         // role: "",
//         gender: "",
//         phoneNo: "",
//         address: "",
//       });
//     } catch (err) {
//       console.log("Admin Signup Error:", err.response?.data || err.message);
//       alert("Signup Failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
//       <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
//         {/* Header */}
//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-bold text-slate-800">Admin Signup</h1>
//           <p className="text-sm text-slate-500 mt-1">
//             Create a new administrator account
//           </p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
//             <input
//               type="text"
//               name="name"
//               required
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               required
//               placeholder="admin@example.com"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
//             <input
//               type="password"
//               name="password"
//               required
//               placeholder="••••••••"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>

//           {/* Age */}
//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-1">Age</label>
//             <input
//               type="number"
//               name="age"
//               required
//               placeholder="18"
//               value={formData.age}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>

//           {/* Role */}
//           {/* <div>
//             <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
//             <select
//               name="role"
//               required
//               value={formData.role}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//             >
//               <option value="">Select Role</option>
//               <option value="admin">Admin</option>
//               <option value="super-admin">Super Admin</option>
//             </select>
//           </div> */}

//           {/* Gender */}
//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-1">Gender</label>
//             <select
//               name="gender"
//               required
//               value={formData.gender}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           {/* Phone */}
         
//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition duration-200 shadow-md ${
//               loading ? "opacity-70 cursor-not-allowed" : ""
//             }`}
//           >
//             {loading ? "Signing up..." : "Sign Up"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminSignup;




































import { useState } from "react";
import { adminSignup } from "../api/auth.api"; // your signup API function

const AdminSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Force role as 'admin' before sending to backend
      const payload = { ...formData, role: "admin" };

      const res = await adminSignup(payload);
      console.log("Admin Signup Success:", res.data);
      alert("Admin Signup Successful");

      setFormData({
        name: "",
        email: "",
        password: "",
        age: "",
        gender: ""
      });
    } catch (err) {
      console.log("Admin Signup Error:", err.response?.data || err.message);
      alert("Signup Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-slate-800">Admin Signup</h1>
          <p className="text-sm text-slate-500 mt-1">
            Create a new administrator account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="admin@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Age
            </label>
            <input
              type="number"
              name="age"
              required
              placeholder="18"
              value={formData.age}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Gender
            </label>
            <select
              name="gender"
              required
              value={formData.gender}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition duration-200 shadow-md ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignup;
