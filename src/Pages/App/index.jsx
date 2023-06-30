
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import SignUp from '../SignUp'
import ForgotPassword from '../ForgotPassword'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/:categoryPath', element: <Home />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-orders/last', element: <MyOrder />},
    {path: '/my-orders/:id', element: <MyOrder />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/sign-up', element: <SignUp />},
    {path: '/forgot-password', element: <ForgotPassword />},
    {path: '/*', element: <NotFound />}
  ])

  return routes;
}

const App = () => {
  
  return (
    <>
    <ShoppingCartProvider>
        <BrowserRouter>
        <Navbar />
          <AppRoutes />
          <CheckoutSideMenu />
        </BrowserRouter>   
     </ShoppingCartProvider>
     </>
  )
}

export default App
