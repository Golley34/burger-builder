import React, { useEffect, useRef, useState, FC } from "react";
import Modal from '../../components/UI/Modal/Modal'
import { AxiosInstance, AxiosResponse } from "axios";


const WithErrorHandler = <P extends object>(WrappedComponent: React.ComponentType<P>, axiosHandler: AxiosInstance) => {
    
    return function WithErrorHandler(props: P) {
        const [error, setError] = useState('')
        const ic: React.MutableRefObject<any> = useRef(null)
        
        if (!ic.current) {
            ic.current = axiosHandler.interceptors.response.use(res => {
                return res
            }, err => {
                setError(err.message)
                throw err
            })
        }

        useEffect(() => {
            return () => axiosHandler.interceptors.response.eject(ic.current)
        }, [])
       

        const errorDismissed = () => {
            setError('')
        }

        return (
        <>
            <Modal 
                show={!!error} 
                closed={errorDismissed}
            >
                {error}
            </Modal>
            <WrappedComponent {...props}/>
        </>
        )
    }
}


export default WithErrorHandler