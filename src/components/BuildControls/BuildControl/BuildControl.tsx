import "./BuildControl.css"
import IBuildControlProps from './IBuildControlProps';

const BuildControl = ({type, added, removed, disabled}: IBuildControlProps) => {
    return (
        <div className='BuildControl'>
            <div className='Label'>{type}</div>
            <button className='Less' disabled={disabled} onClick={removed}>Less</button>
            <button className='More' onClick={added}>More</button>
        </div>
    );
};

export default BuildControl;