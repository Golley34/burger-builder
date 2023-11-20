import { useState } from "react";
import Burger from "../../components/Burger/Burger";
import IIngredients from "../../interfaces/IIngredients";
import BuildControls from "../../components/BuildControls/BuildControls";
import IIngredientsPrices from "../../interfaces/IIngredientsPrices";
import IDisabledInfo from "../../interfaces/IDisabledInfo";

const BurgerBuilder = () => {
    const [ingredients, setIngredients] = useState<IIngredients>({
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    })

    const [totalPrice, setTotalPrice] = useState<number>(200)

    const INGREDIENT_PRICES: IIngredientsPrices = {
        salad: 50,
        bacon: 300,
        cheese: 200,
        meat: 500
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

    return (
        <>
            <Burger ingredients={ingredients}/>
            <BuildControls 
                ingredients={ingredients}
                price={totalPrice}
                ingredientAdded={addIngredientHandler}
                ingredientRemoved={removeIngredientHandler}
                disabledInfo={disabledInfo}
            />
        </>
    );
};

export default BurgerBuilder;