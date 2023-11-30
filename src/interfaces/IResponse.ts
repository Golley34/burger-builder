import IIngredients from "./IIngredients"

export default interface IResponse {
    customer: {
        email: string
        name: string
        postal: string
        street: string
        [key: string]: string;
    }
    ingredients: IIngredients
    price: number   
}