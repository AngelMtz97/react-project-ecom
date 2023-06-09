
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SingIn'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/*', element: <NotFound />}
  ])

  return routes;
}

const App = () => {
  
  return (
    <>
     <BrowserRouter>
     <Navbar />
      <AppRoutes />
     </BrowserRouter>   
     </>
  )
}

export default App
