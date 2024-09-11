import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './Pages/login.jsx'
import Register from './Pages/register.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children :[
      {
        path : "",
        element : <App />
      },
      {
        path : "login" ,
        element : <Login />
      },
      {
        path : "register",
        element : <Register />
      },
      {
        path : "*" ,
        element : <h1>Not Found.</h1>
      },
      {
        path : "app",
        element : <App />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

  </RouterProvider>
)
