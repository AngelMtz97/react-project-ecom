import {useState, useEffect} from 'react';

const useLocalStorage = () => {
   const [account, setAccount] = useState({});
   const [signOut, setSignOut] = useState(true);
   const [error, setError] = useState(''); 

    useEffect(()=>{
        try{
            const lsAccount = localStorage.getItem('account');
            const lsSignOut = localStorage.getItem('sign-out');
            let parsedAccount, parsedSignOut;

            if(!lsAccount){
                localStorage.setItem('account', JSON.stringify({}));
            }else{
                parsedAccount = JSON.parse(lsAccount);
                setAccount(parsedAccount);
            }

            if(!lsSignOut){
                localStorage.setItem('sign-out', JSON.stringify(true));
            }else{
                parsedSignOut = JSON.parse(lsSignOut);
                setSignOut(parsedSignOut);
            }

        }catch(err){
            setError(err);
        }
    }, []);

    const saveAccount = (data) => {
        localStorage.setItem('account', JSON.stringify(data));
        setAccount(data);
    }

    const saveSignOut = (valor) => {
        localStorage.setItem('sign-out', JSON.stringify(valor));
        setSignOut(valor);
    }

    return {account, signOut, saveAccount, saveSignOut, error};

};

export {useLocalStorage};