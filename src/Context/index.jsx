import { createContext, useState } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({children}) => {

    // shopping Cart
    const [count, setCount] = useState(0);

    // Product Detail context
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false);

    const [productDetail, setProductDetail] = useState({});


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
            isProductDetailOpen,
            productDetail,
            setProductDetail
        }}>
            {children}
        </ShoppingCartContext.Provider> 
    )
}

export {
    ShoppingCartContext,
    ShoppingCartProvider
};