import React, {useState} from 'react';
import './ContactData.css';
import Button from "../../../components/UI/Button/Button";
import {useLocation, useNavigate} from "react-router-dom";
// import {apiBurger} from "../../../api/apiBurger";
// import Spinner from "../../../components/UI/Spinner/Spinner";
// import { useSelector } from 'react-redux';

const ContactData = () => { 
    const voidFunc= () => {
        // Do nothing
    }
    return (
        <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        <form>
            <input className="Input" type="text" name="name" placeholder="Your Name"/>
            <input className="Input" type="email" name="email" placeholder="Your Mail"/>
            <input className="Input" type="text" name="street" placeholder="Street"/>
            <input className="Input" type="text" name="postal" placeholder="Postal Code"/>
            <Button btnType="Success" clicked={() => voidFunc()}>ORDER</Button>
        </form>
        </div>
    );
};

export default ContactData