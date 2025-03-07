import React, { useContext } from 'react';
import logo from '../Assets/logo.png';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const authToken = localStorage.getItem('auth-token');

  return (
    <div className="flex items-center justify-between p-6 text-black -mt-4">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-20" />
        <p className="text-xl font-semibold">DressedByMO</p>
      </div>

      <ul className="flex space-x-6">
        <li className="hover:text-orange-600 cursor-pointer">
          <Link to="/">Shop</Link>
        </li>
        <li className="hover:text-orange-600 cursor-pointer">
          <Link to="/nike">Nike</Link>
        </li>
        <li className="hover:text-orange-600 cursor-pointer">
          <Link to="/new-balance">New Balance</Link>
        </li>
        <li className="hover:text-orange-600 cursor-pointer">
          <Link to="/puma">Puma</Link>
        </li>
        <li className="hover:text-orange-600 cursor-pointer">
          <Link to="/adidas">Adidas</Link>
        </li>
        <li className="hover:text-orange-600 cursor-pointer">
          <Link to="/reebok">Reebok</Link>
        </li>
      </ul>

      <div className="flex items-center space-x-4">
        {authToken ? (
          <button
            onClick={() => {
              localStorage.removeItem('auth-token');
              window.location.replace('/');
            }}
            className="hover:text-gray-400 cursor-pointer"
          >
            Logout
          </button>
        ) : (
          <p className="hover:text-gray-400 cursor-pointer">
            <Link to="/login">Log in</Link>
          </p>
        )}

        <div className="relative">
          <Link to="/cart">
            <FaShoppingCart className="text-2xl hover:text-gray-400 cursor-pointer" />
            <span className="absolute -top-3 -right-3 bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {getTotalCartItems()}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
