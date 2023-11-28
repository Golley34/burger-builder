import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import './CheckoutSummary.css'
import ICheckoutSummaryProps from "./ICheckoutSummaryProps";


const CheckoutSummary = ({ingredients, checkoutCancelled, checkoutContinued}: ICheckoutSummaryProps) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger 
                    ingredients={ingredients}
                />
            </div>
            <Button btnType='Danger' clicked={checkoutCancelled}>CANCEL</Button>
            <Button btnType='Success' clicked={checkoutContinued}>Continue</Button>
        </div>
    )
}

export default CheckoutSummary