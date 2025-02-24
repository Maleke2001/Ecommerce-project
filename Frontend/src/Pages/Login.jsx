import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="bg-white p-8 rounded-lg mb-32 shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6">Sign Up</h1>
        
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button className="w-full bg-orange-600 t-white p-3 mt-6 rounded-md focus:outline-none focus:ring-2 focus:ring-black">
          Continue
        </button>

        <p className="text-center mt-4">
          Already have an account?{' '}
          <span className="text-blue-500 hover:underline cursor-pointer">Login here</span>
        </p>

        <div className="flex items-center mt-4">
          <input type="checkbox" id="terms" className="mr-2" />
          <p className="text-sm">By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
