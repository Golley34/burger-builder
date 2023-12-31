import './Ingredient.css';
import IIngredientProps from './IIngredientProps';

const Ingredient = ({type}: IIngredientProps) => {
  switch (type) {
    case 'bread-bottom':
      return <div className='BreadBottom' />
    case 'bread-top':
      return (
        <div className='BreadTop'>
          <div className='Seeds1' />
          <div className='Seeds2' />
        </div>
      )
    case 'meat':
        return <div className="Meat" />;
    case 'cheese':
        return <div className="Cheese" />;
    case 'salad':
        return <div className="Salad" />;
    case 'bacon':
        return <div className="Bacon" />;
    default:
        return null;
  }
}

export default Ingredient;