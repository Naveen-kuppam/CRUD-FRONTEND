import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import Add_Details from './Add_Details.jsx'
import Update from './Update.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "Navbar",
    element:<Navbar/>,
  },
   {
    path: "Add",
    element:<Add_Details/>,
  },
  {
    path: "Update/:mid",
    element:<Update/>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
   </StrictMode>,
)
