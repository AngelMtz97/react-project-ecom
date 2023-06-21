import {TrashIcon} from '@heroicons/react/24/outline'


const OrderCard = (props) => {
    const {id, title, imageUrl, price, onDelete} = props;

    return (
        <div className="flex justify-between items-center px-6 mb-4">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light '>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${price}</p>
                <button onClick={()=>{
                   onDelete(id);
                }}>
                <TrashIcon className='h-6 w-6 text-gray-500'/>
                </button>
            </div>
        </div>
    );
};

export default OrderCard;