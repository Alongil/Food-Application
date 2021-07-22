import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0;
  const onRemoveItemHandler = (id) => {
    cartCtx.removeItem(id);
  }
  const onAddItemHandler = (item) => {
    // item.amount = 1;
    console.log("this is item in cart: " + JSON.stringify(item))
    cartCtx.addItem({...item, amount: 1});
    console.log({...item})
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
        id={item.id}
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={onRemoveItemHandler.bind(null, item.id)}
        onAdd={onAddItemHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <ul>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
