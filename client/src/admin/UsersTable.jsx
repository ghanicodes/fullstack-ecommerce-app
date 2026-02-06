import React, { useEffect, useState } from "react";
import api from "../services/api";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get("admin/allusers");
        const usersData = Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data.users)
          ? res.data.users
          : [];
        setUsers(usersData);
      } catch (err) {
        console.error(err);
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    console.log("Edit user:", user);
  };

  const handleDelete = (user) => {
    console.log("Delete user:", user);
  };

  if (loading) return <p className="text-center mt-6">Loading users...</p>;
  if (error) return <p className="text-center mt-6 text-red-500">{error}</p>;
  if (!users.length) return <p className="text-center mt-6">No users found</p>;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Users List</h2>

      {/* Desktop Table */}
      <table className="min-w-full hidden md:table">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left font-semibold">Name</th>
            <th className="py-3 px-4 text-left font-semibold">Email</th>
            <th className="py-3 px-4 text-left font-semibold">Age</th>
            <th className="py-3 px-4 text-left font-semibold">Gender</th>
            <th className="py-3 px-4 text-left font-semibold">Created</th>
            <th className="py-3 px-4 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {users.map((user) => (
            <tr key={user._id} className="hover:bg-gray-50">
              <td className="py-2 px-4">{user.name || "-"}</td>
              <td className="py-2 px-4">{user.email || "-"}</td>
              <td className="py-2 px-4">{user.age || "-"}</td>
              <td className="py-2 px-4 capitalize">{user.gender || "-"}</td>
              <td className="py-2 px-4 text-sm text-gray-500">
                {user.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : "-"}
              </td>
              <td className="py-2 px-4 space-x-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {users.map((user) => (
          <div
            key={user._id}
            className="border rounded-lg p-4 shadow-sm bg-gray-50"
          >
            <p><span className="font-semibold">Name:</span> {user.name || "-"}</p>
            <p><span className="font-semibold">Email:</span> {user.email || "-"}</p>
            <p><span className="font-semibold">Age:</span> {user.age || "-"}</p>
            <p><span className="font-semibold">Gender:</span> {user.gender || "-"}</p>
            <p className="text-xs text-gray-500 mt-1">
              Added: {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "-"}
            </p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => handleEdit(user)}
                className="flex-1 bg-blue-500 text-white py-1 rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user)}
                className="flex-1 bg-red-500 text-white py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersTable;
