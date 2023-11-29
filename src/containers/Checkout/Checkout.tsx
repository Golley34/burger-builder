import React from 'react';
import { useState, useRef } from 'react';
import IIngredients from "../../interfaces/IIngredients";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { parseSearch } from '../../helper/parseSearch';
import { INGREDIENT_PRICES } from '../../components/constants/ingredients_prices';

const Checkout = () => {

    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    
    const parsed = parseSearch(searchParams)
    const ingredients: any = useRef(parsed)
    // const [ingredients] = useState<IIngredients>(parseIngredients())


    const checkoutCancelledHandler = () => {
        navigate(-1)
    }

    const getTotalPrice = (ingredients: IIngredients) => {
        return Object.keys(ingredients).reduce((total, ingName) => {
            total += INGREDIENT_PRICES[ingName] * ingredients[ingName]
            return total
        }, 0)
    }

    const checkoutContinuedHandler = () => {
        const price = getTotalPrice({...ingredients.current})
        navigate('contact-data', {state: {ingredients: ingredients.current, price}});
    }

    return (
        <>
            <CheckoutSummary 
                ingredients={ingredients.current}
                checkoutCancelled={checkoutCancelledHandler}
                checkoutContinued={checkoutContinuedHandler}
            />
            <Outlet />
        </>
    )
};

export default Checkout;