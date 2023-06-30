import { XMarkIcon } from "@heroicons/react/24/solid";

const PanelMessage = (props) => {
    const {message, variant, onClose} = props;

    const variants = {
        'info': {
             'classVariant': 'bg-gray-500 '
        },
        'warning': {
            'classVariant': 'bg-orange-500'
        },
        'error' : {
            'classVariant': 'bg-red-500'
        },
        'success' : {
            'classVariant': 'bg-green-500'
        }
    }

    const isValidVariant = () => {
        return variant && variants[variant] ? true : false;
    }

    const toggleState = () =>{
          onClose();
    }

    return (
        <div>
          { isValidVariant && open && <div className={`${variants[variant].classVariant} text-white rounded mb-6 h-8 flex items-center justify-around`}>
               <p className='pl-12'>{message}</p>
               <button onClick={() => {
                     toggleState()
                  }}>
                 <XMarkIcon className='text-white h-5 w-5'/>
               </button>
            </div>}
        </div>
    );
};

export default PanelMessage;