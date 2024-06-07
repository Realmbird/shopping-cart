import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/home.jsx'
import Shop from './components/shop.jsx'
import Template from './components/template.jsx';
import './index.css'
import ErrorPage from './components/error.jsx';

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
    ],
    errorElement: <ErrorPage />
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
