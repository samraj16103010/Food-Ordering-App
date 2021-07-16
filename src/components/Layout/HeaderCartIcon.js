import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartIcon.module.css';
const HeaderCartIcon = (props) => {
  return(
      <button onClick = {props.onClick} className = {classes.button}>
          <span className = {classes.icon}>
              <CartIcon />
          </span>
          <span>
              Food Cart
          </span>
          <span className = {classes.badge}>
              3 
          </span>
      </button>
  );
}

export default HeaderCartIcon;