import React from 'react'
import { ReactDOM } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BusinessData from './components/businessData/BusinessData.jsx';
import Login from './components/admin/Login.jsx';
import './index.css'
import EditBusinessData from './components/businessData/EditBusinessData.jsx';
import ServiceList from './components/service/ServicesList.jsx';
import AddMeeting from './components/meeting/AddMeeting.jsx';
import App from './App.jsx';



const Router=()=>{
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BusinessData />,
      children: [
        { path: "S", element: <ServiceList /> },
        { path: "M", element: <AddMeeting /> }
      ],
      errorElement: <div><h1>error</h1><h2>404 Not define</h2></div> ,
    },
    {
      path: '/admin',
      element: <Login />

    },
  ]);
  return(
 
 ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  )
  );
 };
 export default Router;