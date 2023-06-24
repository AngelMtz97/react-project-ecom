import { ChevronRightIcon, CalendarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
    const {dateCheckout, totalPrice, totalProducts} = props;

    return (
        <div className='flex flex-col justify-between items-center mb-3 border border-gray-500 w-80 p-4 rounded-lg'>
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span className='font-light flex justify-between items-center'><CalendarIcon className='h-4 w-4 text-black mr-2'/> {dateCheckout}</span>
                    <span className='font-light flex justify-between items-center'><ShoppingBagIcon className='h-4 w-4 text-black mr-2'/> {totalProducts} articles</span>
                </p>
               <p className='flex items-center gap-2'>
                  <span className='font-medium text-2xl'>${totalPrice}</span>
                  <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer'/>
               </p>
            </div>
        </div>
    );
};

export default OrdersCard;