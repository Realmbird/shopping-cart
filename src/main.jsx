import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/home.jsx'
import Shop from './components/shop.jsx'
import Template from './components/template.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      { 
        path: "/",
        element: <Home />,
      },{
        path: "shop",
        element: <Shop />, 
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
