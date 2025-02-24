import React from 'react'
import newCollection from './Assets/popular'
import Item from './Item/Item'

const NewCollection = () => {
  return (
    <div className='flex flex-col items-center ]justify-center min-h-screen'>
        <h1 className='text-black text-5xl font-semibold text-center'>POPULAR SHOES</h1>
        <hr className="w-[200px] h-[6px] rounded-lg bg-slate-900 my-4"/>
        <div className='grid grid-cols-4 mt-[50px] gap-4'>
            {newCollection.map((item, index)=>{
                return(<Item
                    key={index}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                
                />)
            })}
        </div>

      
    </div>
  )
}

export default NewCollection
