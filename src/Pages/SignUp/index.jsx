

const SignUp = () => {
    return (
        <div className='flex flex-col justify-between w-1/4'>
             <h1 className='text-3xl font-semibold py-8'>Welcome</h1>
             <form className='flex flex-col justify-between items-start w-full'>
                 <label htmlFor='firstName' className='pt-2 text-base'><span className='text-red-700'>*</span> First Name:</label>
                 <input id='firstName' className='rounded mb-4 border-gray-400 border-2 w-full h-10 pl-2' type='text' placeholder="Your first name" required/>
                 <label htmlFor='lastName' className='text-base'><span className='text-red-700'>*</span> Last Name:</label>
                 <input id='lastName' className='rounded mb-4 border-gray-400 border-2 w-full h-10 pl-2' type='text' placeholder="Your last name" required/>
                 <label htmlFor='email' className='text-base'><span className='text-red-700'>*</span> Email:</label>
                 <input id='email' className='rounded mb-4 border-gray-400 border-2 w-full h-10 pl-2' type='text' placeholder="youremail@domain.com" required/>
                 <label htmlFor='user-pass' className='text-base'><span className='text-red-700'>*</span> Password:</label>
                <input id='user-pass' className='rounded mb-5 border-gray-400 border-2 w-full h-10 pl-2' type='password' maxLength='20' required/>
                <button type='submit' className='w-full bg-black text-white rounded py-2 h-12'>Sign Up</button>
             </form>
        </div>
    );
};

export default SignUp;