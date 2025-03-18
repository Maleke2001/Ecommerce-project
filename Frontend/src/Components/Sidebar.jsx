import React from 'react';
import { BsGraphUp } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { TbBrandProducthunt } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64  h-dvh bg-white shadow-md p-5">
      <div className='flex items-center space-x-3 mb-6'>
        <BsGraphUp className="text-xl" />
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>

      <ul className="space-y-6 ">
        <Link to='/'>
          <li className=" cursor-pointer flex items-center space-x-3 ">
            <MdDashboard className="text-xl" />
            <span>Dashboard</span>
          </li>
          <Link to='/addproduct'>
          <li className=" mt-6 cursor-pointer flex items-center space-x-3 ">
            <GiShoppingCart  className="text-xl" />
            <span>Add Product</span>
          </li>
        </Link>
        </Link>
        <Link to='/products'>   
          <li className=" mt-6 cursor-pointer flex items-center space-x-3 ">
            <TbBrandProducthunt className="text-xl" />
            <span>Products</span>
          </li>
        </Link>
        <Link to='/orders'>
          <li className=" mt-6 cursor-pointer flex items-center space-x-3 ">
            <TiShoppingCart className="text-xl" />
            <span>Orders</span>
          </li>
        </Link>
        
      </ul>
    </div>
  );
};

export default Sidebar;
