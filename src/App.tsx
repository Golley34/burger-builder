import { BrowserRouter, Route, Routes } from "react-router-dom";
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import ContactData from "./containers/Checkout/ContactData/ContactData";
import Layout from "./components/Layout/Layout";
import Orders from "./containers/Orders/Orders";
import { apiBurger } from "./api/apiBurger";
import { useEffect } from 'react'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<BurgerBuilder/>} />
                <Route path='/checkout' element={<Checkout />}>
                    <Route path='contact-data' element={<ContactData />} />
                </Route>
                <Route path={'/orders'} element={<Orders />} />
                <Route path='*' element={<div>NOT FOUND</div>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
