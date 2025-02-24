import React from 'react';
import exclusive_pic from '../Assets/exclusive.png';

const Offers = () => {
  return (
    <div className=" bg-gradient-to-r from-purple-500 to-pink-400 w-[80%] h-[60vh] flex items-center justify-between m-auto px-[50px]  rounded-lg shadow-lg">
      
      <div className="flex flex-col justify-center space-y-6">
        <h1 className="text-6xl font-bold text-black">Exclusive</h1>
        <h1 className="text-6xl font-bold text-black">Offers For You</h1>
        <p className="text-xl text-black">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="px-5 py-4 bg-orange-600 text-white rounded-full font-medium transition-all duration-300 hover: focus:outline-none focus:ring-2 focus:ring-blue-500">
          Check Now
        </button>
      </div>

     
      <div className="w-[32%] overflow-hidden ">
        <img 
          src={exclusive_pic} 
          alt="Exclusive Offer" 
          className="w-[250%]  object-cover rounded-lg" 
        />
      </div>
    </div>
  );
}

export default Offers;
