import {useState, useEffect} from 'react';
import React from 'react';
import Card from '../../Components/Card';

const Home = () => {

    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then((response)=>{
           return response.json();
        })
        .then((result) => {
           // console.log(result)
            setItems(result)
        })


    }, []);

    return (
            <div>
                Home
                <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {
                    items?.map((item)=>{
                       return <Card key={item.id} {...item}/>
                    })
                }
                </div>
               
               
            </div>
            
    );
};

export default Home;