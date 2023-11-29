import { BrowserRouter, Route, Routes } from "react-router-dom";
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import ContactData from "./containers/Checkout/ContactData/ContactData";
import { apiBurger } from "./api/apiBurger";
import { useEffect } from 'react'

function App() {
  const getOrders = async () => {
    const data = await apiBurger.getOrders()
    console.log('DATA', data);
  }

  useEffect(() => {
    getOrders()
  }, [])
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BurgerBuilder/>} />
          <Route path='/checkout' element={<Checkout />}>
            <Route path='contact-data' element={<ContactData />} />
          </Route>
          <Route path='*' element={<div>NOT FOUND</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
