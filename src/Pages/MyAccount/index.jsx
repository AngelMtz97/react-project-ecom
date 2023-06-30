import { useContext, useState } from "react";
import { PencilSquareIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const MyAccount = () => {
    const [isEditable, setIsEditable] = useState(false);
    const context = useContext(ShoppingCartContext);
    const [firstName, setFirstName] = useState(context?.account?.firstName);
    const [lastName, setLastName] = useState(context?.account?.lastName);
    const [email, setEmail] = useState(context?.account?.email);

    const handleEdit = () => {
        setIsEditable(true);    
    }

    const handleCancel = () => {
        setIsEditable(false);    
    }

    const handleSave = () => {
        let updAccount = context.account;

        if(updAccount){
            updAccount.firstName = firstName;
            updAccount.lastName = lastName;
            context.saveAccount(updAccount);
        }
        
        setIsEditable(false);    
    }

    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const showEditButtons = () =>{
       return isEditable ? <div className='w-full flex justify-between items-center'>
                                <button type='submit' 
                                        onClick={()=> { 
                                            handleSave();
                                        }}
                                        className='w-full text-black outline outline-offset-0 outline-green-600 outline-2 rounded h-12 font-semibold mt-4 mr-2 text-base flex items-center justify-center'>
                                            Save <CheckCircleIcon className="h-7 w-7 text-green-600 pl-2"/>
                                </button> 
                            
                                <button 
                                    onClick={()=>{
                                        handleCancel();
                                    }}
                                    className='w-full text-black outline outline-offset-0 outline-red-600 outline-2 rounded h-12 font-semibold mt-4 ml-2 text-base flex items-center justify-center'>
                                    Cancel <XCircleIcon className="h-7 w-7 text-red-600 pl-2"/>
                                </button> 
                             </div>
                :
                <button type='submit'
                    onClick={()=> {
                        handleEdit();
                    }} 
                    className='w-full text-black outline outline-offset-0 outline-black outline-1 rounded h-12 font-semibold mt-4 text-base flex items-center justify-center'>
                        Edit <PencilSquareIcon className="h-7 w-7 text-gray-600 pl-2"/>
                </button>
    }

    const showNameEditForm = () =>{
         return isEditable ? <>
                                <label htmlFor='firstName' className='pt-2 text-base'><span className='text-red-700'>*</span>First name:</label>
                                <input id='firstName' className='rounded mb-4 border-gray-400 border-2 w-full h-10 pl-2' 
                                    type='text'
                                    onChange={handleChangeFirstName}
                                    value={firstName} placeholder="Your first name" required/>

                                <label htmlFor='lastName' className='pt-2 text-base'><span className='text-red-700'>*</span>Last name:</label>
                                <input id='lastName' 
                                    onChange={handleChangeLastName}
                                    className='rounded mb-4 border-gray-400 border-2 w-full h-10 pl-2' 
                                    type='text' value={lastName} placeholder="Your last name" required/>
                            
                            </>
                             : 
                                <>
                                <label className='pt-2 text-base'><span className='text-red-700'>*</span> Name:</label>
                                <input id='firstName' className='rounded mb-4 border-gray-400 border-2 w-full h-10 pl-2' 
                                    type='text' value={context?.account?.firstName +' '+ context?.account?.lastName} required disabled/></>
            
    }

    const showEmailEditForm = () => {
        return isEditable ? <input id='email' 
                              className='rounded mb-4 border-gray-400 border-2 w-full h-10 pl-2'
                              value={email}
                              onChange={handleChangeEmail}
                              type='email' 
                              placeholder="youremail@domain.com" required/> 
                            : <input id='email' 
                                        className='rounded mb-4 border-gray-400 border-2 w-full h-10 pl-2'
                                        value={context?.account?.email} 
                                        type='email' 
                                        required disabled/>
    }

    return (
        <div className='flex flex-col justify-between w-1/4'>
            <h1 className="text-xl font-bold py-2">My Account</h1>
            <div className='flex flex-col justify-between items-start w-full'>
                 
                 {
                    showNameEditForm()
                 }
                 
                <label htmlFor='email' className='text-base'><span className='text-red-700'>*</span> Email:</label>
                <input id='email' 
                       className='rounded mb-4 border-gray-400 border-2 w-full h-10 pl-2'
                       value={context?.account?.email} 
                       type='email' 
                       required disabled/>
                  
                <label htmlFor='user-pass' className='text-base'><span className='text-red-700'>*</span> Password:</label>
                <input id='user-pass' className='rounded mb-5 border-gray-400 border-2 w-full h-10 pl-2' value={context?.account?.password} type='password' maxLength='20' required disabled/>
                 
                 {
                    showEditButtons()
                 }
             </div>
        </div>
    );
};

export default MyAccount;