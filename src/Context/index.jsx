import { createContext, useState } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({children}) => {

    // shopping Cart
    const [count, setCount] = useState(0);

    // Product Detail context
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [productDetail, setProductDetail] = useState({});

    const openProductDetail = () => {
        setIsProductDetailOpen(true);
    }

    const closeProductDetail = () => {
        setIsProductDetailOpen(false);
    }

    // Cart
    const [cartProducts, setCartProducts] = useState([]);

    // Shopping cart - Order
    const [order, setOrder] = useState([]);

    // Checkout side menu
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

    const openCheckoutSideMenu = () => {
        setIsCheckoutSideMenuOpen(true);
    }

    const closeCheckoutSideMenu = () => {
        setIsCheckoutSideMenuOpen(false);
    }

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isProductDetailOpen,
            productDetail,
            setProductDetail,
            cartProducts,
            setCartProducts,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider> 
    )
}

export {
    ShoppingCartContext,
    ShoppingCartProvider
};