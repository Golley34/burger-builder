import IIngredients from "../../../interfaces/IIngredients"

export default interface ICheckoutSummaryProps {
    ingredients: IIngredients
    checkoutCancelled: React.MouseEventHandler<HTMLButtonElement>
    checkoutContinued: React.MouseEventHandler<HTMLButtonElement>
}