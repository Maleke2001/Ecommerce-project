import React from 'react';
import data_populate from '../Assets/products'; 
import Item from '../Item/Item';

const PopulateData = () => {
  return (
    <div className="flex flex-col items-center ]justify-center min-h-screen">
        <h1 className="text-black text-5xl font-semibold text-center">POPULAR NIKE</h1>
        <hr className="w-[200px] h-[6px] rounded-lg bg-black my-4" />
        <div className="flex justify-center p-[50px] gap-[30px]">
            {data_populate.map((item, index) => {
                return (
                    <Item
                        key={index}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                );
            })}
        </div>
    </div>
  );
}

export default PopulateData;
