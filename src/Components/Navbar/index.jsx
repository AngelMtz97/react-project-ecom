import { NavLink } from 'react-router-dom'
import { useContext} from 'react'
import { ShoppingCartContext } from '../../Context'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const activeStyle = 'underline underline-offset-4';
    const context = useContext(ShoppingCartContext);

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3 pr-200'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/men-clothes'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Men's clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/women-clothes'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Women's clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                <NavLink to='/jewelery'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                    >
                        Jewelery
                    </NavLink>
                </li>
                { /*<li>
                    <NavLink to='/furnitures' 
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys' 
                     className={({ isActive }) =>
                       isActive ? activeStyle : undefined
                     }
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li> */ }
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                   armando@hotmail.com
                </li>
                <li>
                    <NavLink to='/my-orders' 
                     className={({ isActive }) =>
                      isActive ? activeStyle : undefined
                     }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Sign out
                    </NavLink>
                </li>
                <li>
                    <button className='flex justify-between items-center' onClick={() => {
                        if(!context.isCheckoutSideMenuOpen){
                            context.openCheckoutSideMenu();
                        }else{
                            context.closeCheckoutSideMenu();
                        }
                        
                    }}>
                    <ShoppingCartIcon className='h-7 w-7 text-black-500' />
                      <div>{context.count}</div>
                      </button>
                </li>                
            </ul>
        </nav>
    );
};

export default Navbar;