
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useMemo, useEffect, useState } from 'react';
import { ShoppingCartContext } from '../../Context';
import  PanelMessage  from '../../Components/PanelMessage';


function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
}

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const context = useContext(ShoppingCartContext);
    const navigate = useNavigate();
    let query = useQuery();

    
    useEffect(()=>{
        
        let isAuth = query.get('authuser');
        
        if(isAuth && isAuth == '0'){
            context.saveSignOut(true);
        }

    }, [error]);
      
    const handleSubmit = (event) => {
        event.preventDefault();
        
        //Validar datos

        if(context?.account?.email === email
            && context?.account?.password === password){
                context.saveSignOut(false);
                navigate('/');
        } else{
            setError('Error: user not found.')
        }

    }

    const toggleStateError = () =>{
        setError(null);
    }
    
    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div className='flex flex-col justify-between w-1/4'>
            <h1 className='text-3xl font-semibold py-8'>Welcome</h1>
            {error && <PanelMessage message={error} variant='error' onClose={toggleStateError}/>}
             

             <form className='flex flex-col justify-between items-start w-full' onSubmit={handleSubmit}>
                <label htmlFor='user-email' className='pt-2 text-base'><span className='text-red-700'>*</span> Email:</label>
                <input id='user-email'
                       className='rounded mb-4 border-gray-400 border-2 w-full h-10 pl-2'
                       type='email' 
                       value={email}
                       onChange={emailHandler}
                       placeholder='youremail@domain.com' 
                       required/>

                <label htmlFor='user-pass' className='pt-2 text-base'><span className='text-red-700'>*</span> Password:</label>
                <input id='user-pass' 
                       className='rounded mb-5 border-gray-400 border-2 w-full h-10 pl-2' 
                       type='password'
                       onChange={passwordHandler}
                       value={password} 
                       placeholder='Your password'
                       maxLength='20' 
                       required/>

                <button type='submit' 
                        className='w-full bg-black text-white rounded py-2 h-12'>Log In</button>
             </form>

             <NavLink to='/forgot-password'
               className='text-sm underline underline-offset-4 py-4 font-medium'>
                Forgot my password
             </NavLink>

            <NavLink to='/sign-up'>
                <button className='w-full text-black outline outline-offset-0 outline-black outline-2 rounded h-12 font-semibold mt-20'>Sign Up</button>
            </NavLink>
        </div>
    );
};

export default SignIn;