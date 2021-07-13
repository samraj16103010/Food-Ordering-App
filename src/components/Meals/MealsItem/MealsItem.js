import React from "react";
import classes from './MealsItem.module.css'
import MealsItemForm from "./MealsItemForm";
const MealsItem = (props) => {
    const price = `$${props.meal.price.toFixed(2)}`
    return <li className = {classes.meal}>
        <div>
            <h3>{props.meal.name}</h3>
            <div className = {classes.description}>{props.meal.description}</div>
            <div className = {classes.price}>{price}</div>
        </div>
        <div>
            <MealsItemForm id = {props.meal.id}/>
        </div>
    </li>
}

export default MealsItem;