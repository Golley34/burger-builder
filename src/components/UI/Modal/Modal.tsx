import React, { FC } from 'react';
import './Modal.css';
import IModalProps from './IModalProps';
import Backdrop from '../Backdrop/Backdrop';

const Modal: FC<IModalProps> = ({children, show, closed}) => {
    return (
        <>
            <Backdrop 
                    show={show}
                    clicked={closed}
            />
            <div 
                className='Modal'
                style={{
                    transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: show ? '1' : '0'
                }}
            >
                {children}
            </div>
        </>
    );
};

export default Modal;