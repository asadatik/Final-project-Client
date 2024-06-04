import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './Root/Route';
import Home from './Pages/Home/Home';
import { HelmetProvider } from 'react-helmet-async';
import ErrorPage from './Component/ErrorPage';
import OurMenu from './Pages/OurMenu/OurMenu';
import OurShop from './Pages/OurShop/OurShop';
import Contact from './Pages/Contact.jsx/Contact';
import Login from './Pages/SignUp/Login';
import AuthProvider from './Provider/AuthProvider';
import Register from './Pages/SignUp/Register';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from './Root/Dashboard';
import Cart from './Pages/DashBoard/Cart';
import PrivetRoute from './Root/PrivetRoute';
import AddItem  from '../src/Pages/DashBoard/AddItem'
import AllUser from './Pages/DashBoard/AllUser';
import ManageItem from './Pages/DashBoard/ManageItem';
import UpdatedItem from './Pages/DashBoard/UpdatedItem';
import Payment from './Pages/DashBoard/Payment';
import AdminHome from './Pages/DashBoard/AdminHome';
import UserHome from './Pages/DashBoard/UserHome';

const queryClient = new QueryClient();



const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
       
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'signup',
    element: <Register></Register>
  },
  {
    path: "/ourmenu",
    element: <OurMenu></OurMenu>
  },
  {
    path: "/shop/:category",
    element: <OurShop></OurShop>
  },
  {
    path: "/contact",
    element: <Contact></Contact>
  },

  ],

},
/////// DASHBOARD ROUTE ////////
{
  path: 'dashboard',
  element:<PrivetRoute>  <Dashboard></Dashboard></PrivetRoute>,
  children: [
/////  NORMAL USER ROUTE

{
  path: 'userHome',
  element: <UserHome></UserHome>
},

    {
      path: 'cart',
      element:<Cart></Cart>
    },

    {
      path: 'payment',
      element:<Payment></Payment>
    },


// //////  ADMIN USER ROUTES
{
  path: 'adminHome',
  element: <AdminHome></AdminHome>
},
{
  path: 'addItems',
  element: <AddItem></AddItem>
},

{
  path: 'manageItem',
  element:<ManageItem></ManageItem>
},

{
  path: 'updateItem/:id',
  element: <UpdatedItem></UpdatedItem>,
                      
},

    {
      path: 'users',
      element: <AllUser></AllUser>
    },



  ]
}
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<AuthProvider>
<QueryClientProvider client={queryClient}>
             <HelmetProvider>
          <RouterProvider router={router} />
             </HelmetProvider>
    
             </QueryClientProvider>

     </AuthProvider>


  </React.StrictMode>,
)
