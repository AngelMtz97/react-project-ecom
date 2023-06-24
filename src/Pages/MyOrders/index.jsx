import { Link } from 'react-router-dom';
import {useContext} from 'react';
import OrdersCard from '../../Components/OrdersCard';
import { ShoppingCartContext } from '../../Context';

const MyOrders = () => {
    
    const context = useContext(ShoppingCartContext);

    return (
        <div>
            <div className='flex w-80 items-center relative justify-center'>
                <h1>My Orders</h1>
            </div>
            
            {
                context.order.map((item, index)=>{
                    return <Link key={index} to={`/my-orders/${index}`}>
                            <OrdersCard totalPrice={item.totalPrice} totalProducts={item.totalProducts} />
                          </Link>
                })
            }
           
        </div>
    );
};

export default MyOrders;