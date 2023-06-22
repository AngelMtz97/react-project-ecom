import React from 'react';
import OrderCard from '../../Components/OrderCard';
import { ShoppingCartContext } from '../../Context';

const MyOrder = () => {
    const context = React.useContext(ShoppingCartContext);

    return (
        <div>
            My Order
            
            <div className='flex flex-col w-180'>
            {
                context.order?.slice(-1)[0]?.products?.map((product)=>{
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