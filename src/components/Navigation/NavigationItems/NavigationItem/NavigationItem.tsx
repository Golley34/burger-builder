import React from "react";
import './NavigationItem.css'
import {NavLink} from "react-router-dom";
import INavigationItemProps from "./INavigationItemProps";


const NavigationItem = (props: INavigationItemProps) => {
    return (
        <li className={'NavigationItem'}>
            <NavLink to={props.to} end={props.end}>
                {props.children}
            </NavLink>
        </li>
    )
}

export default NavigationItem