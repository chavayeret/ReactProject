import React from 'react'
import  ReactDOM  from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BusinessData from './components/businessData/BusinessData.jsx';
import Login from './components/admin/Login.jsx';
import './index.css'
import ServicesList from './components/service/ServicesList.jsx';
import MeetingList from './components/meeting/MeetingList.jsx';
import AdminPage from './components/admin/AdminPage.jsx';




  const router = createBrowserRouter([
    {
      path: "/",
      element: <BusinessData />, 
      errorElement: <div><h1>error</h1><h2>404 Not define</h2></div> ,
    },
    {
      path: "/admin",
      element: <AdminPage />,
      children: [
        { path: "services", element: <ServicesList /> },
        { path: "Meeting", element: <MeetingList /> }
      ],
      errorElement: <div><h1>Error!</h1><h2>404 Not define!</h2></div>,
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>     
  );


