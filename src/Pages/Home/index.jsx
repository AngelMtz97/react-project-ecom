import {useContext} from 'react';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context';
import { useParams } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Home = () => {

    const context = useContext(ShoppingCartContext);
    const {categoryPath} = useParams();

    const renderView = () => {
       
        let itemsToRender = context.searchByTitle?.length > 0? 
        context.filteredItems : context.items;

        if(!!categoryPath && itemsToRender){

            const categories = {
                'men-clothes': "men's clothing",
                'women-clothes' : "women's clothing",
                'electronics' : 'electronics',
                'jewelery' : 'jewelery'
            }

            let category = categories[categoryPath];

            itemsToRender = itemsToRender.filter((item) =>{
                return item.category.toLowerCase() === category.toLowerCase();
            })
        }

        if(itemsToRender?.length > 0){
          return itemsToRender.map((item)=>{
            return <Card key={item.id} {...item}/>
         })
        }else{
            return <p><strong>{context.searchByTitle}</strong> not found.</p>;
        }
    }
    
    return (
            <div>
                 <div className='flex w-full items-center relative justify-center mb-4'>
                    <h1 className='font-medium text-xl'>Exclusive Products</h1>
                 </div>
                 <div className='w-full'>
                    <i className='absolute pt-5 pl-2'>
                    <MagnifyingGlassIcon className='h-4 w-4 text-black'/>
                    </i>
                    <input type='text'
                            value={context.searchByTitle}
                            placeholder='Search a product'
                            className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none placeholder:pl-4 pl-10'
                            onChange={(event) => {
                                context.setSearchByTitle(event.target.value);
                            }}
                            />
                 </div>
                <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {
                    renderView()
                }
                </div>
               
               <ProductDetail />
            </div>
            
    );
};

export default Home;