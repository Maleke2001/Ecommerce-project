import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='w-[350px]'>
       <Link to={`/product/${props.id}`} > 
        <img 
          onClick={window.scrollTo(0,0)}  src={props.image} 
          alt={props.name} 
          className='hover:scale-105 transition-transform duration-300' 
        />
       </Link>

        <div className='text-justify'>
          <p className='m-[6px] block'>{props.name}</p>
          <div className='flex gap-[20px] ml-1.5'>
             <div className='text-gray-700 font-normal font-600'>
                R{props.new_price}
             </div>
             <div className='text-gray-300 font-normal font-600 line-through'>
                R{props.old_price}
             </div>
          </div>
        </div>
    </div>
  )
}

export default Item
