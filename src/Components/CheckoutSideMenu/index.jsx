import './styles.css'
import { Link } from 'react-router-dom';
import {XMarkIcon} from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../Utils';

const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        let productsInCart = context.cartProducts.filter((item) => {
            return item.id !== id;
        });

        if(productsInCart){
          context.setCartProducts(productsInCart);
          context.setCount(context.count-1);
        }
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: new Date().toLocaleDateString(),
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        context.setCount(0);
        context.closeCheckoutSideMenu();
        context.setSearchByTitle(null);
    }

    return (
       <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded bg-white`}>
           <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <button onClick={()=>{
                    context.closeCheckoutSideMenu();
                }}>
                <XMarkIcon className='h-6 w-6 text-gray-500'/>
            </button>
           </div>
           <div className='px-4 overflow-y-scroll flex-1'>
            {
                context.cartProducts.map((product)=>{
                    return (<OrderCard key={product.id}
                               id={product.id}
                               title={product.title} 
                               imageUrl={product.image}
                               price={product.price}
                               onDelete={handleDelete} />
                    )
                })
            }
            </div>
            <div className='px-6 mb-4'>
              <p className='flex justify-between items-center mb-2'>
                <span className='font-bold'>Total:</span>
                <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
              </p>
              <Link to='/my-orders/last'>
                <button className='w-full bg-black py-3 text-white rounded' onClick={()=>{
                    handleCheckout();
                }}>Checkout</button>
              </Link>
            </div>
       </aside>
    );
};

export default CheckoutSideMenu;