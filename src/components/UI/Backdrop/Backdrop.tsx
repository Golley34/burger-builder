import React, { FC } from 'react';
import './Backdrop.css'
import IBackdropProps from './IBackdropProps';


const Backdrop: FC<IBackdropProps> = ({show, clicked}) => {
    return (
        <>
            {show ? <div onClick={clicked} className="Backdrop" /> : null}
        </>
    )
}

export default Backdrop