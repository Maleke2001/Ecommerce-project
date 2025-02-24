import React, { useContext } from 'react'
import Product from '../Pages/Product';
import { CiStar } from "react-icons/ci";
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product}=props
    const {addToCart} = useContext(ShopContext);
  return (
    <div className="max-w-5xl mx-auto p-6 flex gap-10">
   
    <div className="w-1/2">
      <img
        src={product.image}
        className="w-full h-auto rounded-lg"
      />
    </div>

    <div className="w-1/2">
      <h2 className="text-2xl font-bold mb-2">
        {product.name}
      </h2>
      
      
      <div className="flex items-center mb-2">
        <span className=" flex text-yellow-500 text-xl">
            <CiStar/>
            <CiStar/>
            <CiStar/>
            <CiStar/>
            <CiStar/>
        </span>
        <span className="ml-2 text-gray-600">(122)</span>
      </div>

      <div className="flex items-center gap-3 text-lg mb-4">
        <span className="line-through text-gray-400">{product.old_price}</span>
        <span className="text-red-500 font-semibold">{product.new_price}</span>
      </div>

 
      <p className="text-gray-700 mb-4">
       {product.description}
      </p>

      <div className="mb-4">
        <h1 className="font-semibold mb-2">Select Size</h1>
        <div className="flex gap-3">
          {["3", "5", "6", "7", "8"].map((size) => (
            <button
              key={size}
              className="px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-200"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <button onClick={()=>{addToCart(product.id)}}className="bg-orange-600 text-white py-3 px-6 rounded-lg w-full hover:bg-red-600">
        ADD TO CART
      </button>

     
      <div className="mt-4 text-gray-600">
        <p>
          <strong>Category:</strong> Nike,Adidas,Puma, New balance
        </p>
        <p>
          <strong>Tags:</strong> Modern, Latest
        </p>
      </div>
    </div>
  </div>
);
};
  

export default ProductDisplay
