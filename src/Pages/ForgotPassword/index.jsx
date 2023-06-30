import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    return (
        <div className='flex flex-col justify-between w-1/4'>
              <div className='flex items-center justify-start'>
                <button title='back' onClick={() => {
                    navigate('/sign-in');
                }}>
                    <ChevronLeftIcon className='text-black h-5 w-5'/>
                </button>
                <h1 className='text-lg font-semibold py-8 ml-2 text-center'>Enter your email to send recover steps</h1>
             </div>

             <form className='flex flex-col justify-between items-start w-full' onSubmit={handleSubmit}>
                <label htmlFor='email' className='text-base'><span className='text-red-700'>*</span> Email:</label>
                 <input id='email' 
                        className='rounded mb-4 border-gray-400 border-2 w-full h-10 pl-2 font-light'
                        type='text'
                        value={email}
                        onChange={emailHandler}
                        placeholder='youremail@domain.com'
                        required/>

                <button type='submit' className='w-full bg-red-500 text-white rounded py-2 h-10'>Send</button>
             </form>             
        </div>
    );
};

export default ForgotPassword;