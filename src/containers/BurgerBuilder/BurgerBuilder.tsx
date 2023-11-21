import { useState, useEffect } from "react";
import Burger from "../../components/Burger/Burger";
import IIngredients from "../../interfaces/IIngredients";
import BuildControls from "../../components/BuildControls/BuildControls";
import IIngredientsPrices from "../../interfaces/IIngredientsPrices";
import IDisabledInfo from "../../interfaces/IDisabledInfo";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const BurgerBuilder = () => {
    const [ingredients, setIngredients] = useState<IIngredients>({
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    })

    const [purchasable, setPurchasable] = useState(false)
    const [purchasing, setPurchasing] = useState(false)
    const [totalPrice, setTotalPrice] = useState<number>(100)

    const INGREDIENT_PRICES: IIngredientsPrices = {
        salad: 10,
        bacon: 60,
        cheese: 40,
        meat: 100
    }

    const addIngredientHandler = (type: string): void => {
        const oldCount = ingredients[type]
        const updateCount = oldCount + 1
        const updatedIngredients = {...ingredients}
        updatedIngredients[type] = updateCount

        const priceAddition = INGREDIENT_PRICES[type]
        const newPrice = totalPrice + priceAddition

        setIngredients(updatedIngredients)
        setTotalPrice(newPrice)
        updatePurchaseState(updatedIngredients)
    }

    const removeIngredientHandler = (type: string): void => {
        const oldCount = ingredients[type]
        if (oldCount <= 0) return

        const updateCount = oldCount - 1
        const updatedIngredients = {...ingredients}
        updatedIngredients[type] = updateCount

        const priceAddition = INGREDIENT_PRICES[type]
        const newPrice = totalPrice - priceAddition

        setIngredients(updatedIngredients)
        setTotalPrice(newPrice)
        updatePurchaseState(updatedIngredients)
    }

    const disabledIngredients = {...ingredients}
    const disabledInfo: IDisabledInfo = {
        salad: true,
        bacon: true,
        cheese: true,
        meat: true
    }

    for (const key in disabledInfo) {
        disabledInfo[key] = disabledIngredients[key] <= 0
    }

    const updatePurchaseState = (ingredients: IIngredients) => {
        const sum = Object.keys(ingredients)
          .map(igKey => ingredients[igKey])
          .reduce((sum, el) => sum + el, 0)
    
          setPurchasable(sum > 0)
    }

    const purchaseHandler = () => {
        setPurchasing(true)
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false)
    }

    const purchaseContinueHandler = () => {
        alert('You continued!')
    }

    return (
        <>
            <Modal
                show={purchasing}
                closed={purchaseCancelHandler}
            >
                <OrderSummary
                    ingredients={ingredients}
                    totalPrice={totalPrice}
                    purchaseCancelled={purchaseCancelHandler}
                    purchaseContinued={purchaseContinueHandler}
                />
            </Modal>
            <Burger ingredients={ingredients}/>
            <BuildControls 
                ingredients={ingredients}
                price={totalPrice}
                ingredientAdded={addIngredientHandler}
                ingredientRemoved={removeIngredientHandler}
                disabledInfo={disabledInfo}
                purchasable={purchasable}
                ordered={purchaseHandler}
            />
        </>
    );
};

export default BurgerBuilder;