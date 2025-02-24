import React from "react";
import related from "./Assets/products";
import Item from "./Item/Item";

const Relatedproducts = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center gap-7 p-10">
      <h1 className="text-black text-4xl font-bold">Related Products</h1>
      <hr className="w-24 border-black" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
        {related.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Relatedproducts;
