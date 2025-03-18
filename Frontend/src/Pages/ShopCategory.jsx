import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  console.log(all_product);

  return (
    <div>
    <div className="relative w-full h-[300] md:h-[400px] lg:h-[450px] flex items-center justify-between bg-gradient-to-r from-orange-200 to-orange-100">
      <div className=" p-6 text-black text-center rounded-lg shadow-lg w-full md:w-[50%]">
        <h2 className="text-5xl font-extrabold">FLASH SALE: 50% OFF!</h2>
        <p className="text-2xl font-medium">Time is running out. Grab the deal before it’s gone!</p>
        <div className="mt-4 text-xl font-semibold">
          <span>Only </span>
          <span className="text-orange">12 hours 20 minutes</span>
          <span> left!</span>
        </div>
        <Link
          to="/shop"
          className="mt-4 inline-block bg-orange-600  text-black py-3 px-8 rounded-full hover:bg-gray-800"
        >
          Shop the Deal
        </Link>
      </div>
      <img
        src={props.banner}
        alt="Category Banner"
        className="h-full object-contain max-w-[89%] pr-10"
      />
    </div>
     
    <div className="flex mx-[170px] justify-between items-center mt-[50px]">
      <p>
       <span className="font-semibold">Showing 1-12</span> out of 15 products 
       </p>
     <div className=" flex px-[20px] py-[10px] items-center border border-[#888] rounded-full">
        Sort by 
        <IoMdArrowDropdown/>
      </div>
     </div> 

     <div className="py-[20px] px-[170px] grid grid-cols-4 gap-[350px] border">
      {
     all_product.map((item, i) => {
      // if (props.category === item.category) {
      return (
        <Item
          key={i}
          id={item.id}
          name={item.name}
          image={item.image}
          new_price={item.new_price}
          old_price={item.old_price}
        />
      );
    // }
    // return null;
  }) 
} 
     </div>
     <div className=" flex justify-center items-center my-[100px] mx-auto w-[233px] h-[69px] bg-gray-300 text-black text-[18px] font-medium rounded-full">
      Explore MOre
     </div>
    </div>
  );
};

export default ShopCategory;
//  