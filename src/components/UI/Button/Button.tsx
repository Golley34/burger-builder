import React, { FC } from 'react';
import './Button.css'
import IButtonProps from './IButtonProps';


const Button: FC<IButtonProps>  = ({clicked, btnType, children}) => {
    return (
        <button
            onClick={clicked}
            className={['Button', btnType].join(' ')}
        >
            {children}
        </button>
    )
}

export default Button