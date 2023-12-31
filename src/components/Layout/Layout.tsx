﻿import React, {Fragment} from 'react';
import './Layout.css'
import {Outlet} from "react-router-dom";
import Toolbar from "../Navigation/Toolbar/Toolbar";



const Layout = () => {
    return (
        <>
            <Toolbar />
            <main className="Layout-Content">
                <Outlet/>
            </main>
        </>
    )
}

export default Layout;