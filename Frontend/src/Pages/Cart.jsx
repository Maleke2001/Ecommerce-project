import React, { useContext } from "react";
import CartItems from "../Components/CartItems";
import { ShopContext } from "../Context/ShopContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div>
      <CartItems />
    </div>
  );
};

export default Cart;
