import React from 'react';
import { useState, useRef } from 'react';

import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { parseSearch } from '../../helper/parseSearch';

const Checkout = () => {

    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    
    const parsed = parseSearch(searchParams)
    const ingredients: any = useRef(parsed)
    // const [ingredients] = useState<IIngredients>(parseIngredients())


    const checkoutCancelledHandler = () => {
        navigate(-1)
    }

    const checkoutContinuedHandler = () => {
        navigate('contact-data')
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