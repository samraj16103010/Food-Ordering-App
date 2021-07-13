import React,{Fragment} from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartIcon from './HeaderCartIcon';

const Header = () => {
 return(
     <Fragment>
         <header className = {classes.header}>
             <h1>ReactMeals</h1>
             <HeaderCartIcon />
         </header>
         <div className = {classes['main-image']}>
             <img src = {mealsImage} alt = "A table full of delicious meals!"></img>
         </div>
     </Fragment>
 );
}

export default Header;