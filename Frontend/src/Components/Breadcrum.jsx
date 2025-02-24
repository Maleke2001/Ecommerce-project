import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='flex max-w-5xl mx-auto p-6 items-center gap-[8px] text-black font-semibold text-[16px]  transform-cpu'>
      HOME<FaArrowCircleRight/> SHOP <FaArrowCircleRight/>{product.category} <FaArrowCircleRight/>{product.name}    </div>
  )
}

export default Breadcrum
