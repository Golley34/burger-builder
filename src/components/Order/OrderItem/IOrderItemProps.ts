import IIngredients from "../../../interfaces/IIngredients"

export default interface IOrderItemProps {
    ingredients: IIngredients
    price: number
}