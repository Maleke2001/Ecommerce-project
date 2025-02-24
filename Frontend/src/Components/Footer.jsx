import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[25px] mt-[50px] p-[20px] text-black'>
      
        <div className='flex items-center gap-[20px]'>
            <p className='text-black font-semibold text-3xl'>DressedByMo</p>
        </div>

     
        <ul className='flex gap-[30px] text-black '>
            <li className=' cursor-pointer'>Company</li>
            <li className='cursor-pointer'>Products</li>
            <li className='cursor-pointer'>Online Shop</li>
            <li className=' cursor-pointer'>About</li>
            <li className=' cursor-pointer'>Contact</li>
        </ul>


        <div className='flex gap-[30px] '>
            <div className='p-[10px] rounded-fullhover:cursor-pointer'>
                <BsInstagram className='text-2xl' />
            </div>
            <div className='p-[10px] rounded-full hover: cursor-pointer'>
                <FaFacebook className='text-2xl' />
            </div>
            <div className='p-[10px] rounded-full hover:cursor-pointer'>
                <FaTwitter className='text-2xl' />
            </div>
        </div>

        <div className='w-full text-center'>
            <hr className='border-gray-500' />
            <p className='text-sm mt-2'>Copyright @ 2023 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer;
