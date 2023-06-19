import './styles.css'
import {XMarkIcon} from '@heroicons/react/24/solid';
const ProductDetail = () => {
    return (
       <aside className='product-detail flex flex-col fixed right-0 border border-black rounded bg-white'>
           <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <button>
                <XMarkIcon className='h-6 w-6 text-gray-500'/>
            </button>
           </div>
       </aside>
    );
};

export default ProductDetail;