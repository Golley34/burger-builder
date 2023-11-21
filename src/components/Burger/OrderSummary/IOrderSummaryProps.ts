import IIngredients from "../../../interfaces/IIngredients"

export default interface IOrderSummaryProps {
    ingredients: IIngredients
    totalPrice: number
    purchaseCancelled: React.MouseEventHandler<HTMLButtonElement>
    purchaseContinued: React.MouseEventHandler<HTMLButtonElement>
}