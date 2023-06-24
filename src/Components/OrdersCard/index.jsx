import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
    const {totalPrice, totalProducts} = props;

    return (
        <div className='flex flex-col justify-between items-center mb-3 border border-gray-500 w-80 p-4 rounded-lg'>
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                Date: <span className='font-light'>22.02.23</span>
                Total items: <span className='font-light'>{totalProducts}</span>
                </p>
               <p className='flex items-center gap-2'>
                Total amount: <span className='font-medium text-2xl'>${totalPrice}</span>
                  <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer'/>
               </p>
            </div>
        </div>
    );
};

export default OrdersCard;