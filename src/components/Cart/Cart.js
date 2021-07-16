import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
const Cart = (props) => {
  const cartItems = <ul className = {classes['cart-items']}>{[{
    id:1,name:'Sushi',amount:2,price:12.99
  }].map((cart) => <li>{cart.name}</li>)}</ul>
   return(
     <Modal onClose = {props.onHideCart}>
       {cartItems}
       <div className = {classes.total}>
          <span>Total Amount</span>
          <span>35.66</span>
       </div>
       <div className = {classes.actions}>
           <button onClick = {props.onHideCart} className = {classes['button--alt']}>Close</button>
           <button className = {classes.button}>Order</button>
       </div>
     </Modal>
     
   );
}

export default Cart;
