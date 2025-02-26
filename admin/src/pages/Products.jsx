import React, { useEffect, useState } from 'react';
import { CiCircleRemove } from "react-icons/ci";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  // Fetch API
  const fetchInfo = async () => {
    try {
      const resp = await fetch('http://localhost:5000/allproducts');
      const data = await resp.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-6">All Products List</h1>

      {/* Table Layout */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead className="bg-gray-200">
            <tr className="text-left">
              <th className="p-4">Products</th>
              <th className="p-4">Title</th>
              <th className="p-4">Old Price</th>
              <th className="p-4">New Price</th>
              <th className="p-4">Category</th>
              <th className="p-4 text-center">Remove</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {allProducts.map((product, index) => (
              <tr key={index} className="border-t hover:bg-gray-100">
                <td className="p-4">
                  <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded-md" />
                </td>
                <td className="p-4">{product.name}</td>
                <td className="p-4 text-gray-500">R {product.old_price}</td>
                <td className="p-4 font-semibold text-green-600">R {product.new_price}</td>
                <td className="p-4">{product.category}</td>
                <td className="p-4 text-center">
                  <CiCircleRemove className="text-red-500 cursor-pointer text-2xl hover:text-red-700" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
