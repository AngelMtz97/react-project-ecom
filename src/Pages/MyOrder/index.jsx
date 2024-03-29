import {useContext} from 'react';
import { Link } from 'react-router-dom';
import OrderCard from '../../Components/OrderCard';
import { ShoppingCartContext } from '../../Context';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

const MyOrder = () => {
    const context = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/')+1);
    
    if(index === 'last') {
        index = context.order?.length - 1;
    }

    return (
        <div>
              <div className='flex w-80 items-center relative justify-center mb-2'>
                <Link to={'/my-orders'} className='absolute left-0'>
                  <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
                </Link>
                <h1>My Order</h1>
            </div>
            
            <div className='flex flex-col w-180'>
            {
                context.order?.[index].products.map((product)=>{
                    return (<OrderCard key={product.id}
                               id={product.id}
                               title={product.title} 
                               imageUrl={product.image}
                               price={product.price}
                                />
                    )
                })
            }
            </div>
        </div>
    );
};

export default MyOrder;