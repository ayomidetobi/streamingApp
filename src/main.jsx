import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Auth from './components/Auth.jsx'
import Header from './components/Header.jsx'
import Details from './components/Details.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import Slide_1 from './components/Slide_1.jsx'
import Slide_2 from './components/Slide_2.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'
import { ReactQueryDevtools } from 'react-query/devtools';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60*60,
      cacheTime: 1000 * 6,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      // onError: error => toast.error(`Something went wrong ${error.message}`),
    },
  },
});
const sessionStoragePersistor = createWebStoragePersistor({ storage: window.sessionStorage })
persistQueryClient({
  queryClient, 
  persistor: sessionStoragePersistor,
  maxAge:1000*10,
});

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
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
