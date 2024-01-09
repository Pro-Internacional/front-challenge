import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import {NextUIProvider} from "@nextui-org/react";

import './index.css'

import App from './pages/App'

const routerParams = [
  {
    path: '/',
    element: <App />,
  }
]
const router = createBrowserRouter(routerParams);

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <React.StrictMode>
      <NextUIProvider>
        <div className='main-app-container w-full h-full'>
          <RouterProvider router={router} />
        </div>
      </NextUIProvider>
    </React.StrictMode>
  </HelmetProvider>
)
