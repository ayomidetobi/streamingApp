import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Auth from './components/Auth.jsx'
import Header from './components/header.jsx'
import Details from './components/details.jsx'
import Card from './components/card.jsx'
import Footer from './components/Footer.jsx'
import Slide_1 from './components/Slide_1.jsx'
import Slide_2 from './components/Slide_2.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/auth",
    element: <Auth />
  },
  {
    path: "/header",
    element: <Header />
  },
  {
    path: "/details/:movieId",
    element: <Details />
  },
  {
    path: "/footer",
    element: <Footer />
  },
  {
    path: "/card",
    element: <Card />
  },
  {
    path: "/slide1",
    element: <Slide_1 />
  },
  {
    path: "/slide2",
    element: <Slide_2 />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
