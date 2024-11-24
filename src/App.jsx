import { createBrowserRouter, RouterProvider } from 'react-router-dom';  
import './App.css';  
import Layout from './layout/layout';  
import First from './pages/first/first';  
import Second from './pages/second/second';  
import Third from './pages/third/third';  
import Fourth from './pages/fourth/fourth'; // Ensure this import path matches the filesystem  
import Fifth from './pages/fifth/fifth';  
import Sixth from './pages/sixth/sixth';  
import Seventh from './pages/seventh/seventh';  
import Eighth from './pages/eighth/eighth';  
import Ninth from './pages/ninth/ninth';  
import Tenth from './pages/tenth/tenth';  
import Eleventh from './pages/eleventh/eleventh';  
import Twelfth from './pages/twelfth/twelfth'; // Ensure the import path is correct  
import Thirteenth from './pages/thirteenth/thirteenth';  

const router = createBrowserRouter([  
  {  
    path: "/",  
    element: <Layout />,  
    children: [  
      {  
        index: true,  
        element: <First />  
      },  
      {  
        path: "/second",  
        element: <Second />  
      },  
      {  
        path: "/third",  
        element: <Third />  
      },  
      {  
        path: "/fourth",   
        element: <Fourth />  
      },  
      {  
        path: "/fifth",  
        element: <Fifth />  
      },  
      {  
        path: "/sixth",  
        element: <Sixth />  
      },  
      {  
        path: "/seventh",  
        element: <Seventh />  
      },  
      {  
        path: "/eighth",  
        element: <Eighth />  
      },  
      {  
        path: "/ninth",  
        element: <Ninth />  
      },  
      {  
        path: "/tenth",  
        element: <Tenth />  
      },  
      {  
        path: "/eleventh",  
        element: <Eleventh />  
      },  
      {  
        path: "/twelfth",   
        element: <Twelfth />  
      },  
      {  
        path: "/thirteenth", 
        element: <Thirteenth />  
      },  
    ],  
  }  
]);  

export default function App() {  
  return <RouterProvider router={router} />;  
}