import React, { useEffect, useState } from "react";
import api from "../services/api";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("product/allproducts"); 
        const productsData = Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data.products)
          ? res.data.products
          : [];
        setProducts(productsData);
      } catch (err) {
        console.error(err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    console.log("Edit product:", product);
  };

  const handleDelete = (product) => {
    console.log("Delete product:", product);
  };

  if (loading) return <p className="text-center mt-6">Loading products...</p>;
  if (error) return <p className="text-center mt-6 text-red-500">{error}</p>;
  if (!products.length) return <p className="text-center mt-6">No products found</p>;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Products List</h2>

      {/* Desktop Table */}
      <table className="min-w-full hidden md:table">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Category</th>
            <th className="py-3 px-4 text-left">Price</th>
            <th className="py-3 px-4 text-left">Description</th>
            <th className="py-3 px-4 text-left">Created</th>
            <th className="py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {products.map((product) => (
            <tr key={product._id} className="hover:bg-gray-50">
              <td className="py-2 px-4">{product.name}</td>
              <td className="py-2 px-4 capitalize">{product.category}</td>
              <td className="py-2 px-4 font-semibold">Rs {product.price}</td>
              <td className="py-2 px-4 truncate max-w-xs">
                {product.description}
              </td>
              <td className="py-2 px-4 text-sm text-gray-500">
                {new Date(product.createdAt).toLocaleDateString()}
              </td>
              <td className="py-2 px-4 space-x-2">
                <button
                  onClick={() => handleEdit(product)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product)}
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
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg p-4 shadow-sm bg-gray-50"
          >
            <p><span className="font-semibold">Name:</span> {product.name}</p>
            <p><span className="font-semibold">Category:</span> {product.category}</p>
            <p><span className="font-semibold">Price:</span> Rs {product.price}</p>
            <p className="text-sm text-gray-600">
              {product.description}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Added: {new Date(product.createdAt).toLocaleDateString()}
            </p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => handleEdit(product)}
                className="flex-1 bg-blue-500 text-white py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product)}
                className="flex-1 bg-red-500 text-white py-1 rounded"
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

export default ProductsTable;
