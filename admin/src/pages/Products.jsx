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

  const remove_product = async (id) => {
    try {
      await fetch('http://localhost:5000/removeproduct', {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: id })
      });
      await fetchInfo();
    } catch (error) {
      console.error("Couldn't delete a product:", error);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">All Products List</h1>

      {/* Table Layout */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead className="bg-gray-300 text-lg">
            <tr className="text-left">
              <th className="p-6">Products</th>
              <th className="p-6">Title</th>
              <th className="p-6">Old Price</th>
              <th className="p-6">New Price</th>
              <th className="p-6">Category</th>
              <th className="p-6 text-center">Remove</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {allProducts.map((product, index) => (
              <tr key={index} className="border-t hover:bg-gray-100 text-lg">
                <td className="p-6">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
                </td>
                <td className="p-6">{product.name}</td>
                <td className="p-6 text-gray-500">$ {product.old_price}</td>
                <td className="p-6 font-semibold text-green-600">$ {product.new_price}</td>
                <td className="p-6">{product.category}</td>
                <td className="p-6 text-center">
                  <CiCircleRemove onClick={() => remove_product(product.id)} className="text-red-500 cursor-pointer text-3xl hover:text-red-700" />
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
