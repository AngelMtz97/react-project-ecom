import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';

const Card = ({id, description, category, title, image, price}) => {
    
    const context = useContext(ShoppingCartContext);
    const currentProduct = {id, description, category, title, image, price };

    const showProduct = () => {
        context.openProductDetail();
        context.setProductDetail({category, title, image, price, description});
        context.closeCheckoutSideMenu();
    }

    const productAddedToCart = (newProduct) => {
        return context.cartProducts.some((product) => {
            return product.id === newProduct.id;   
        });
    }

    const addProductToCart = (event, newProduct) => {
        event.stopPropagation();
        
        let productAdded = productAddedToCart(newProduct);
        
        if(!productAdded){
            context.setCartProducts([...context.cartProducts, newProduct]);
            context.setCount(context.count+1);
            context.openCheckoutSideMenu();
        }
       
        context.closeProductDetail();
     
    }


    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'
        onClick={()=>{
            showProduct();
        }}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category?.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={image} alt={title}/>
                <button className={`absolute top-0 right-0 flex justify-center items-center ${productAddedToCart(currentProduct) ? 'bg-black' : 'bg-white'} w-6 h-6 rounded-full m-2 p-1`} onClick={(event)=>{
                    addProductToCart(event, currentProduct);
                }}>
                    { productAddedToCart(currentProduct) ? <CheckIcon className='h-4 w-4 text-green-400'/> : <PlusIcon className='h-4 w-4 text-black'/>}
                </button>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light truncate mr-2'>{title}</span>
                <span className='text-lg font-medium'>${price}</span>
            </p>
        </div>
    );
};

export default Card;