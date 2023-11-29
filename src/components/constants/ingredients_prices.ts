interface IINGREDIENT_PRICES {
    salad: number
    bacon: number
    cheese: number
    meat: number
    [key: string]: number;
}

export const INGREDIENT_PRICES: IINGREDIENT_PRICES = {
    salad: 10,
    bacon: 60,
    cheese: 40,
    meat: 100
}