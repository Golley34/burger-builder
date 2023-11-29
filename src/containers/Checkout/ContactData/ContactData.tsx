import React, {useState} from 'react';
import './ContactData.css';
import Button from "../../../components/UI/Button/Button";
import {useLocation, useNavigate} from "react-router-dom";
import {apiBurger} from "../../../api/apiBurger";
import Spinner from "../../../components/UI/Spinner/Spinner";
// import { useSelector } from 'react-redux';

const ContactData = () => { 
    const navigate = useNavigate()
    const location = useLocation()

    const [loading, setLoading] = useState(false)
    const [customer, setCustomer] = useState({
        name: '',
        email: '',
        street: '',
        postal: ''
    })

    const customerDataChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setCustomer(prevState => {
            return {...prevState, [name]: value}
        })
    }

    const orderHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        const {ingredients, price} = location.state
        const order = {
            ingredients: ingredients,
            price: price,
            customer: {...customer}
        };
        try {
            await apiBurger.createOrder(order)
        } finally {
            setLoading(false)
            navigate('/')
        }
    }

    return (
        <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        {loading
            ?
            <Spinner/>
            : 
            <form onSubmit={(event) => {orderHandler(event)}}>
                <input onChange={customerDataChanged} className="Input" type="text" name="name" placeholder="Your Name"/>
                <input onChange={customerDataChanged} className="Input" type="email" name="email" placeholder="Your Mail"/>
                <input onChange={customerDataChanged} className="Input" type="text" name="street" placeholder="Street"/>
                <input onChange={customerDataChanged} className="Input" type="text" name="postal" placeholder="Postal Code"/>
                <Button btnType="Success" clicked={()=>console.log()}>ORDER</Button>
            </form>}
        </div>
    );
};

export default ContactData