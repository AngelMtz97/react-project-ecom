import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from "../../Context";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const SignUp = () => {

    const context = useContext(ShoppingCartContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        context.saveSignOut(false);

        //Validar datos

        context.saveAccount({
            'firstName' : firstName,
            'lastName': lastName,
            'email' : email,
            'password' : password
        });
    }

    const firstNameHandler = (event) => {
          setFirstName(event.target.value);
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value);
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div className='flex flex-col justify-between w-1/4'>
             <div className='flex items-center justify-start'>
                <button title='back' className='pr-4' onClick={() => {
                    navigate('/sign-in');
                }}>
                    <ChevronLeftIcon className='text-black h-5 w-5'/>
                </button>
                <h1 className='text-3xl font-semibold py-8 ml-12 text-center'>Welcome</h1>
             </div>

             <form className='flex flex-col justify-between items-start w-full' onSubmit={handleSubmit}>
                 <label htmlFor='firstName' className='pt-2 text-base'><span className='text-red-700'>*</span> First Name:</label>
                 <input id='firstName'
                      className='rounded mb-4 border-gray-400 border-2 w-full h-10 pl-2 font-light' 
                      type='text' placeholder='Your first name'
                      onChange={firstNameHandler}
                      value={firstName} required/>

                 <label htmlFor='lastName' className='text-base'><span className='text-red-700'>*</span> Last Name:</label>
                 <input id='lastName' 
                        className='rounded mb-4 border-gray-400 border-2 w-full h-10 pl-2 font-light'
                        onChange={lastNameHandler}
                        type='text' value={lastName} placeholder='Your last name' required/>
                 
                 <label htmlFor='email' className='text-base'><span className='text-red-700'>*</span> Email:</label>
                 <input id='email' 
                        className='rounded mb-4 border-gray-400 border-2 w-full h-10 pl-2 font-light'
                        type='text'
                        value={email}
                        onChange={emailHandler}
                        placeholder='youremail@domain.com'
                        required/>
                 
                 <label htmlFor='user-pass' className='text-base'><span className='text-red-700'>*</span> Password:</label>
                 <input id='user-pass' className='rounded mb-5 border-gray-400 border-2 w-full h-10 pl-2'
                        onChange={passwordHandler}
                        type='password' 
                        value={password}
                        placeholder='Enter a brand new password'
                        maxLength='20' required/>
                 <button type='submit' className='w-full bg-black text-white rounded py-2 h-12'>Sign Up</button>
             </form>
        </div>
    );
};

export default SignUp;