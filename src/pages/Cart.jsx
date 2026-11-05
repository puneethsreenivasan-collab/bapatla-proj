import React from "react";
import "../styles/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removefromcart } from "../redux/CartSlice";

const Cart = () => {
  let {cartItems} = useSelector((state) => state.cart);

 const dispatch =useDispatch();



  console.log(cartItems);
  return (
    <div className="cart-container">
      {cartItems.map((x) => {
        return(
        <div className="cart-card">
          <img src={x.ProductImg} alt="img" className="img" />

          <h6>Product Name :{x.ProductName} </h6>

          <button onClick={()=>{ dispatch( removefromcart(x.id)) }}>Remove</button>

          <button>increase 1</button>

          <button>decrease 1</button>
        </div>)
      })}
    </div>
  );
};

export default Cart;
