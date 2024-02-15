import React from 'react'
import ReactDOM  from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import BusinessData from './components/businessData/BusinessData';
import './index.css'
import AdminPage from './components/admin/AdminPage';
import Service from './components/service/Service';
import Meeting from './components/meeting/Meeting';

  const router = createBrowserRouter([
    {
      path: "/",
      element:<div> <BusinessData />,<br/>
      <Service/><br/><Meeting/></div>, 
      errorElement: <div><h1>Error</h1><h2>404 Not define</h2></div> ,
    },
    {
      path: "/admin",
      element: <AdminPage />,
      children: [
         { path: "services", element: <Service/> },
         { path: "meetings", element: <Meeting /> }
      ],
      errorElement: <div><h1>Error!</h1><h2>404 Not define!</h2></div>,
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>     
  );


