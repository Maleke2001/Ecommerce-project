import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState("Login");
  const [FormData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })
  const changeHandler = (e)=>{
    setFormData({...FormData,[e.target.name]:e.target.value})
  }
 
  const login = ()=>{
   console.log("login executed", FormData)
  }

  const signup = async () => {
    console.log("Sign up executed");
  
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData),
      });
  
      // Ensure response is received and converted to JSON
      const responseData = await response.json();
  
      // Check if the response has a success key
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors || "Something you are using the same email ID");
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert("Signup failed. Please try again.");
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg mb-32 shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6">{state}</h1>
        
        <div className="space-y-4">
          {state === "Sign Up" ? (
            <input
              name='username'
              value={FormData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          ) : null}
          <input
             name='email'
             value={FormData.email}
             onChange={changeHandler}
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            name='password'
            value={FormData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button 
          onClick={()=>{state==="Login"?login():signup()}}
          className="w-full bg-orange-600 text-white p-3 mt-6 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        >
          Continue
        </button>

        {state === "Sign Up" ? (
          <p className="text-center mt-4">
            Already have an account?{' '}
            <span 
              onClick={() => setState("Login")}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-center mt-4">
            Create an account?{' '}
            <span 
              onClick={() => setState("Sign Up")}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}

        <div className="flex items-center mt-4">
          <input type="checkbox" id="terms" className="mr-2" />
          <p className="text-sm">By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
