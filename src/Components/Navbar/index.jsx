import { NavLink } from 'react-router-dom'
import { useContext} from 'react'
import { ShoppingCartContext } from '../../Context'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const activeStyle = 'underline underline-offset-4';
    const context = useContext(ShoppingCartContext);

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
            <ul className='flex items-center gap-3 pr-200'>
                <li className='font-semibold text-lg'>
                   <NavLink to={ !context.signOut ? '/' : false}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ !context.signOut ? '/' : false }
                    className={({ isActive }) =>
                    isActive && !context.signOut ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ !context.signOut ? '/men-clothes' : false}
                    className={({ isActive }) =>
                        isActive && !context.signOut ? activeStyle : undefined
                    }>
                        Men's clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ !context.signOut ? '/women-clothes' : false}
                    className={({ isActive }) =>
                        isActive && !context.signOut ? activeStyle : undefined
                    }>
                        Women's clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ !context.signOut ? '/electronics' : false}
                        className={({ isActive }) =>
                        isActive && !context.signOut ? activeStyle : undefined
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                <NavLink to={ !context.signOut ? '/jewelery' : false}
                        className={({ isActive }) =>
                        isActive && !context.signOut ? activeStyle : undefined
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
                { !context.signOut && <li className='text-black/60'>
                     { context?.account?.email}
                  </li>
                }
                {
                 !context.signOut && <li>
                    <NavLink to='/my-orders' 
                     className={({ isActive }) =>
                      isActive ? activeStyle : undefined
                     }>
                        My Orders
                    </NavLink>
                </li>
                }
               {
                !context.signOut && <li>
                    <NavLink to='/my-account'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                }
                { context.signOut && <li>
                    <NavLink to='/sign-in'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Sign In
                    </NavLink>
                </li>
                }
                {
                !context.signOut && <li>              
                    <NavLink to='/sign-in?authuser=0'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Sign out
                    </NavLink>
                </li>
                }
                {
                !context.signOut && <li>
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
                }                
            </ul>
        </nav>
    );
};

export default Navbar;