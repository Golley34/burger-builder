import IIngredients from "../../interfaces/IIngredients"
import IDisabledInfo from "../../interfaces/IDisabledInfo"

export default interface IBuildControlsProps {
    ingredients: IIngredients  
    price: number  
    ingredientAdded(key: string): void
    ingredientRemoved(key: string): void
    disabledInfo: IDisabledInfo 
    purchasable: boolean
    ordered: React.MouseEventHandler<HTMLButtonElement>
}