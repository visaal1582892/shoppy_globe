import { StrictMode,lazy,Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './utils/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import ErrorElement from './components/ErrorElement.jsx'

// Lazy loading components
const SearchProducts=lazy(()=>import('./components/SearchProducts.jsx'));
const Cart=lazy(()=>import('./components/Cart.jsx'));
const ProductDetails=lazy(()=>import('./components/ProductDetails.jsx'));
const Checkout=lazy(()=>import('./components/Checkout.jsx'));

// Creating routing configuration
const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<ErrorElement />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'products/:category',
        element: <Suspense fallback={<p className='p-10'>Loading</p>}><SearchProducts /></Suspense>
      },
      {
        path: 'cart',
        element: <Suspense fallback={<p className='p-10'>Loading</p>}><Cart /></Suspense>
      },
      {
        path: 'product/:id',
        element: <Suspense fallback={<p className='p-10'>Loading</p>}><ProductDetails /></Suspense>
      },
      {
        path: 'checkout',
        element: <Suspense fallback={<p className='p-10'>Loading</p>}><Checkout /></Suspense>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>,
)
