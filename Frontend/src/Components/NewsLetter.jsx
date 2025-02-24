import React from 'react'

const NewsLetter = () => {
  return (
    <div className="w-[80%] h-[60vh] flex items-center justify-between m-auto px-[50px] bg-gray-100 rounded-lg shadow-lg">
      
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-6xl font-bold text-black">Get Exclusive Offers</h1>
          <h1 className="text-6xl font-bold text-black">On Your Email</h1>
          <p className="text-xl text-black">Subscribe to our newsletter and stay updated</p>
        </div>

        <div className="w-[50%] flex bg-white rounded-lg p-4 space-x-3 shadow-md">
          <input 
            type="email" 
            placeholder="Enter your Email"
            className="w-full px-4 py-3 rounded-l-lg  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
          <button className="px-6 py-3 bg-orange-600 text-white rounded-r-lg font-medium transition-all duration-300 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Subscribe
          </button>
        </div>
    </div>
  )
}

export default NewsLetter
