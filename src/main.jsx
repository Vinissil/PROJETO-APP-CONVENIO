import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import Singin from './routes/Singin'
import Singup from './routes/Singup'
import App from './App'
import Error from './routes/Error'

const router = createBrowserRouter([
  {path: '/', element: <App/ >, errorElement: <Error/ >,

    children: [
      {path: '/', element: <Singin/ >},
      {path: '/Singup', element: <Singup/ >},
      {path:'/Home', element: <Home/ >},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

