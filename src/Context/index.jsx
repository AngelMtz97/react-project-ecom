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

    const [filteredItems, setFilteredItems] = useState(null);

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState('');

    
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

    const filteredItemsByTitle = (itemsProducts, searchProductByTitle) => {
        return itemsProducts?.filter( (item) =>{
            return item.title.toLowerCase().includes(searchProductByTitle.toLowerCase());
        });
    }

    useEffect(() =>{
        if(searchByTitle){
            setFilteredItems(filteredItemsByTitle(items, searchByTitle));
        }

    }, [items, searchByTitle]);

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
            setSearchByTitle,
            filteredItems
        }}>
            {children}
        </ShoppingCartContext.Provider> 
    )
}

export {
    ShoppingCartContext,
    ShoppingCartProvider
};