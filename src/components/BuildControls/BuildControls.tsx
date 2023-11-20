import "./BuildControls.css"
import BuildControl from './BuildControl/BuildControl';
import IBuildControlsProps from './IBuildControlsProps';

const BuildControls = ({ingredients, price, ingredientAdded, ingredientRemoved, disabledInfo}: IBuildControlsProps) => {
    return (
        <div className="BuildControls">
            <p>Current Price: <strong>{price} KZT</strong></p>
            {Object.keys(ingredients).map(ingType => {
                return <BuildControl 
                    key={ingType} 
                    type={ingType} 
                    added={() => ingredientAdded(ingType)}
                    removed={() => ingredientRemoved(ingType)}
                    disabled={disabledInfo[ingType]}
                />;
            })}
        </div>
    );
};

export default BuildControls;