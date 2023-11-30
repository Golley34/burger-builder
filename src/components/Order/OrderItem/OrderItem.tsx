import React, { useState } from "react";
import './OrderItem.css'
import IOrderItemProps from "./IOrderItemProps";

const OrderItem = (props: IOrderItemProps) => {
    const ingredientOutput = Object.keys(props.ingredients).map((key, i) => {
        return <li className={'OrderItem__li'} key={i}>{key}: {props.ingredients[key]}</li>
    })

    return (
        <>
        <div className={'OrderItem'}>
            <ul><strong>Ingredients:</strong> {ingredientOutput}</ul>
            <p>Price: <strong>{props.price} RUB</strong></p>
        </div>
        </>
    )
}

export default OrderItem