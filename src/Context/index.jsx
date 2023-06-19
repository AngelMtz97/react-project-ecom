import { createContext, useState } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false);


    const openProductDetail = () => {
        setisProductDetailOpen(true);
    }

    const closeProductDetail = () => {
        setisProductDetailOpen(false);
    }

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen
        }}>
            {children}
        </ShoppingCartContext.Provider> 
    )
}

export {
    ShoppingCartContext,
    ShoppingCartProvider
};