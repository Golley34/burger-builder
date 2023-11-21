import React, { FC } from 'react';
import './OrderSummary.css';
import IOrderSummaryProps from './IOrderSummaryProps';
import Button from '../../UI/Button/Button';

const OrderSummary: FC<IOrderSummaryProps> = ({ingredients, totalPrice, purchaseCancelled, purchaseContinued}) => {

    const ingredientSummary = Object.keys(ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>
                        {igKey}
                    </span> : {ingredients[igKey]}
                </li>
            )
    })

    return (
        <>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: </strong>{totalPrice} RUB</p>
            <p>Continue to checkout</p>
            <Button btnType={'Danger'} clicked={purchaseCancelled}>CANCEL</Button>
            <Button btnType={'Success'} clicked={purchaseContinued}>CONTINUE</Button>
        </>       
    );
};

export default OrderSummary;