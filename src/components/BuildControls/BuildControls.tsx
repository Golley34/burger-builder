import "./BuildControls.css"
import BuildControl from './BuildControl/BuildControl';
import IBuildControlsProps from './IBuildControlsProps';

const BuildControls = ({ingredients, price, ingredientAdded, ingredientRemoved, disabledInfo, purchasable, ordered}: IBuildControlsProps) => {
    return (
        <div className="BuildControls">
            <p>Current Price: <strong>{price} RUB</strong></p>
            {Object.keys(ingredients).map(ingType => {
                return <BuildControl 
                    key={ingType} 
                    type={ingType} 
                    added={() => ingredientAdded(ingType)}
                    removed={() => ingredientRemoved(ingType)}
                    disabled={disabledInfo[ingType]}
                />;
            })}
            <button 
                onClick={ordered}
                className='OrderButton'
                disabled={!purchasable}
            >ORDER NOW
            </button>
        </div>
    );
};

export default BuildControls;