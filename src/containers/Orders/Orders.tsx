import React, {useEffect, useState} from 'react'
import {apiBurger} from "../../api/apiBurger";
import Spinner from "../../components/UI/Spinner/Spinner";
import OrderItem from '../../components/Order/OrderItem/OrderItem';
import IResponse from '../../interfaces/IResponse';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import { burgerInstance } from '../../api/instances';



const Orders = () => {

    const [orders, setOrders] = useState<IResponse[]>([]);
    const [loading, setLoading] = useState(false);

    const getOrders = async () => {
        setLoading(true);
        try {
            const response: IResponse[] = await apiBurger.getOrders()
            setOrders(response);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getOrders()
    }, [])

    return (
        <>
            {loading 
                ? <Spinner /> 
                : 
                <div>
                    {Object.keys(orders)?.map((key, i) => {
                        return <OrderItem 
                                    key={key}
                                    ingredients={orders[key as any].ingredients}
                                    price={orders[key as any].price}
                        />
                    })}
                </div> 
            }
        </>
    )
}

export default WithErrorHandler(Orders, burgerInstance)