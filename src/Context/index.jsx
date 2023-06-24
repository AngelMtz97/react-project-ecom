import { createContext, useState, useEffect } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({children}) => {

    // shopping Cart
    const [count, setCount] = useState(0);

    // Product Detail context
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [productDetail, setProductDetail] = useState({});

    // Get products
    const [items, setItems] = useState(null);

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null);

    
    useEffect(() => {
        //fetch('https://api.escuelajs.co/api/v1/products')
        fetch('https://fakestoreapi.com/products')
        .then((response)=>{
           return response.json();
        })
        .then((result) => {
           // console.log(result)
            setItems(result)
        })


    }, []);

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
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle
        }}>
            {children}
        </ShoppingCartContext.Provider> 
    )
}

export {
    ShoppingCartContext,
    ShoppingCartProvider
};