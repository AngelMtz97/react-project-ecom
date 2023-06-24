import {useContext} from 'react';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context';

const Home = () => {

    const context = useContext(ShoppingCartContext);
    
    return (
            <div>
                 <div className='flex w-full items-center relative justify-center mb-4'>
                    <h1 className='font-medium text-xl'>Exclusive Products</h1>
                 </div>
                 <input type='text'
                        placeholder='Search a product'
                        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
                        onChange={(event) => {
                            context.setSearchByTitle(event.target.value);
                        }}
                        />
                <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {
                    context?.items?.map((item)=>{
                       return <Card key={item.id} {...item}/>
                    })
                }
                </div>
               
               <ProductDetail />
            </div>
            
    );
};

export default Home;