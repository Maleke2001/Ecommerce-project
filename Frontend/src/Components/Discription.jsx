import React from 'react'
import { useState } from 'react';

const Discription = () => {
    const [activeTab, setActiveTab] = useState("description");

  return (
    <div>
           <div className="max-w-5xl mx-auto p-6">
  
      <div className="flex border-b border-gray-300 mb-4">
        <button
          className={`px-6 py-2 font-semibold ${
            activeTab === "description" ? "border-b-2 border-black" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`px-6 py-2 font-semibold ${
            activeTab === "reviews" ? "border-b-2 border-black" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (122)
        </button>
      </div>

   
      {activeTab === "description" && (
        <div className="text-gray-700">
          <p>
            An e-commerce website is an online platform that facilitates the buying and selling
            of products or services over the internet. It serves as a virtual marketplace where
            businesses and individuals can showcase their products, interact with customers, and
            conduct transactions without the need for a physical presence. E-commerce websites
            have gained immense popularity due to their convenience, accessibility, and the
            global reach they offer.
          </p>
          <p className="mt-2">
            E-commerce websites typically display products or services along with detailed
            descriptions, images, prices, and any available variations (e.g., sizes, colors).
            Each product usually has its own dedicated page with relevant information.
          </p>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="text-gray-700">
          <p>Customer reviews will be displayed here.</p>
        </div>
      )}
    </div>



      
    </div>
  )
}

export default Discription
