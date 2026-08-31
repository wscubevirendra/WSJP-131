import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Store from './pages/Store'
import Shop from './pages/Shop'
import CartPage from './pages/Cart'

export default function App() {

    const routers=createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            children:[
                {
                    path:"/",
                    element:<Home/>
                },
                {
                    path:"/store/:slug?",
                    element:<Store/>
                },
                {
                    path:"/shop/:id",
                    element:<Shop/>
                },
                {
                    path:"/cart",
                    element:<CartPage/>
                }
            ]
        }
    ])


  return (
    <RouterProvider router={routers}/>
  )
}
