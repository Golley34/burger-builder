import React from 'react';
import './Burger.css';
import Ingredient from './Ingredient/Ingredient'
import IBurgerProps from './IBurgerProps';

const Burger = ({ingredients}: IBurgerProps) => {
    const ingredientKeys = Object.keys(ingredients)
    let ingList: React.ReactElement[] = []      
    ingredientKeys.forEach(igKey => {
        let amount: number = ingredients[igKey]
        for (let i = 0; i < amount; i++) {
            ingList.push(<Ingredient key={igKey + i} type={igKey} />)
        }
    })

    if (ingList.length === 0) {
        ingList.push(<p>Please start adding ingredients!</p>)
    }

    return (
        <div className='Burger'>
            <Ingredient type={'bread-top'}/>
            {ingList}
            <Ingredient type={'bread-bottom'}/>
        </div>
    );
};

export default Burger;