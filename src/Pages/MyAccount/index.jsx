import { PencilSquareIcon } from "@heroicons/react/24/solid";

const MyAccount = () => {
    return (
        <div className='flex flex-col justify-between w-1/4'>
            <h1 className="text-xl font-bold py-2">My Account</h1>
            <form className='flex flex-col justify-between items-start w-full'>
                 
                 <label htmlFor='firstName' className='pt-2 text-base'><span className='text-red-700'>*</span> Name:</label>
                 <input id='firstName' className='rounded mb-4 border-gray-400 border-2 w-full h-10 pl-2' 
                         type='text' value='Angel Armando Martinez' placeholder="Your first name" required disabled/>

                 <label htmlFor='email' className='text-base'><span className='text-red-700'>*</span> Email:</label>
                 <input id='email' className='rounded mb-4 border-gray-400 border-2 w-full h-10 pl-2' value='armando@hotmail.com' type='text' placeholder="youremail@domain.com" required disabled/>
                 
                 <label htmlFor='user-pass' className='text-base'><span className='text-red-700'>*</span> Password:</label>
                 <input id='user-pass' className='rounded mb-5 border-gray-400 border-2 w-full h-10 pl-2' value='password' type='password' maxLength='20' required disabled/>
                 <button type='submit' className='w-full text-black outline outline-offset-0 outline-black outline-1 rounded h-12 font-semibold mt-4 text-base flex items-center justify-center'>Edit <PencilSquareIcon className="h-7 w-7 text-black-500 pl-2"/></button>
             </form>
        </div>
    );
};

export default MyAccount;