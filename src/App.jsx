import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './layout/layout';
import First from './pages/first/first';
import Second from './pages/second/second';
import Third from './pages/third/third';
import Fourth from './pages/fourth/fourth';
import Fifth from './pages/fifth/fifth';
import Sixth from './pages/sixth/sixth';
import Seventh from './pages/seventh/seventh';
import Eighth from './pages/eighth/eighth';
import Ninth from './pages/ninth/ninth';
import Tenth from './pages/tenth/tenth';
import Eleventh from './pages/eleventh/eleventh';
import Twelfth from './pages/twelfth/twelfth';
import Thirteenth from './pages/thirteenth/thirteenth';


export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <First></First>
        },
        {
          path: "second",
          element: <Second></Second>
        },
        {
          path: "third",
          element: <Third></Third>
        },
        {
          path: "fourth",
          element: <Fourth></Fourth>,

          path: "fifth",
          element: <Fifth></Fifth>,
        },
        {
          path: "sixth",
          element: <Sixth></Sixth>,
        },
        {
          path: "seventh",
          element: <Seventh></Seventh> ,
        },
        {
          path: "eighth",
          element: <Eighth></Eighth>,
        },
        {
          path: "ninth",
          element: <Ninth></Ninth>,
        },
        {
          path: "tenth",
          element: <Tenth></Tenth>,
        },
        {
          path: "eleventh",
          element: <Eleventh></Eleventh>,
        },
        {
          path: "twelfth",
          element: <Twelfth></Twelfth>,
        },
        {
          path: "thirteenth",
          element: <Thirteenth></Thirteenth>,
        },
      ],
    }
  ])

  return <>
      <RouterProvider router = {router} ></RouterProvider>
  </>
}