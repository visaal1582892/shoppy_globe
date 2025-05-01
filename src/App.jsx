import { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Response from './components/Response';
import useFetch from './utils/useFetch';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { setCategoriesData, setCategoriesError } from './utils/categoriesSlice';
import { setProductsData, setProductsError } from './utils/productsSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();

  // Fetching
  const categoriesResponse = useFetch('https://dummyjson.com/products/categories');
  const productsResponse = useFetch('https://dummyjson.com/products?limit=194&select=id,title,description,category,price,discountPercentage,rating,stock,brand,warrantyInformation,shippingInformation,returnPolicy,thumbnail,reviews');

  // Single useEffect for both
  useEffect(() => {
    // Categories handling
    if (categoriesResponse) {
      if (categoriesResponse.status === "Success") {
        dispatch(setCategoriesData(categoriesResponse.data));
      } else if (categoriesResponse.status === "Error") {
        dispatch(setCategoriesError(categoriesResponse.data));
      }
    }

    // Products handling
    if (productsResponse) {
      if (productsResponse.status === "Success") {
        dispatch(setProductsData(productsResponse.data.products));
      } else if (productsResponse.status === "Error") {
        dispatch(setProductsError(productsResponse.data));
      }
    }
  }, [categoriesResponse, productsResponse, dispatch]);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full animate-fadingIn">
      <Header />
      <Navbar />
      <Response />
      <Outlet />
    </div>
  );
}

export default App;
