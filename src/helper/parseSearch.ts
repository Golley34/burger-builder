import IIngredients from "../interfaces/IIngredients"

export const parseSearch = (searchParams: any) => {
    return Object.fromEntries<number>(searchParams)
}