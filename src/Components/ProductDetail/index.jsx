import './styles.css'
import {XMarkIcon} from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {

    const context = useContext(ShoppingCartContext);

    return (
       <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded bg-white`}>
           <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <button onClick={()=>{
                    context.closeProductDetail();
                }}>
                <XMarkIcon className='h-6 w-6 text-gray-500'/>
            </button>
           </div>

           <div className='flex flex-col items-center'>
            <figure className='px-6'>
                <img className='w-48 h-48 rounded-lg object-contain pl-19' src={context.productDetail.image} alt={context.productDetail.title}/>
            </figure>
            <p className='flex flex-col p-4'>
                <span className='font-medium text-2xl mb-2'>${context.productDetail.price}</span>
                <span className='font-medium text-md'>{context.productDetail.title}</span>
                <span className='font-light text-md'>{context.productDetail.description}</span>
            </p>
           </div>
       </aside>
    );
};

export default ProductDetail;