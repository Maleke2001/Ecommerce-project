import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { CiCircleRemove } from "react-icons/ci";

const Cart = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  if (!cartItems) {
    return <p className="text-center text-lg font-semibold">Loading cart...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Cart Table */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm">
              <th className="px-6 py-3 border border-gray-200">Products</th>
              <th className="px-6 py-3 border border-gray-200">Title</th>
              <th className="px-6 py-3 border border-gray-200">Price</th>
              <th className="px-6 py-3 border border-gray-200">Quantity</th>
              <th className="px-6 py-3 border border-gray-200">Total</th>
              <th className="px-6 py-3 border border-gray-200">Remove</th>
            </tr>
          </thead>
          <tbody>
            {all_product &&
              all_product.map(
                (product) =>
                  cartItems[product.id] > 0 && (
                    <tr key={product.id} className="border border-gray-200">
                      <td className="px-6 py-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </td>
                      <td className="px-6 py-4 text-gray-700">{product.name}</td>
                      <td className="px-6 py-4 text-gray-700">
                        R{product.new_price}
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="number"
                          value={cartItems[product.id]}
                          className="w-12 border rounded px-2 py-1 text-center"
                          readOnly
                        />
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        R{product.new_price * cartItems[product.id]}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="text-red-500 hover:text-red-700 text-lg"
                        >
                          <CiCircleRemove size={24} />
                        </button>
                      </td>
                    </tr>
                  )
              )}
          </tbody>
        </table>
      </div>

      
      <div className="flex flex-col  mt-14 md:flex-row justify-between items-start">
        {/* Cart Totals */}
        <div className="w-full md:w-1/2 border border-gray-200 p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-semibold mb-4">Cart Totals</h1>
          <div className="flex justify-between text-gray-700 py-2">
            <p>Subtotal</p>
            <p>R{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="flex justify-between text-gray-700 py-2">
            <p>Shipping Fee</p>
            <p className="text-green-600">Free</p>
          </div>
          <hr />
          <div className="flex justify-between text-lg font-semibold py-2">
            <h3>Total</h3>
            <h3>R{getTotalCartAmount()}</h3>
          </div>
          <button className="w-full bg-orange-600 text-white py-3 mt-4 rounded-md hover:bg-red-600 transition duration-200">
            PROCEED TO CHECKOUT
          </button>
        </div>

        
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <p className="text-gray-700 mb-2">If you have a promo code, enter it here</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Promo Code"
              className="w-full border px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
