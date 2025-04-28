import { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import SuggestedProducts from './components/SuggestedProducts';
import useFetch from './utils/useFetch';
import { useDispatch } from 'react-redux';
import { setCategoriesData, setCategoriesError } from './utils/categoriesSlice';
import { setProductsData, setProductsError } from './utils/productsSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();

  // Fetching
  const categoriesResponse = useFetch('https://dummyjson.com/products/categories');
  const productsResponse = useFetch('https://dummyjson.com/products?limit=120&select=id,title,description,category,price,discountPercentage,rating,stock,warrantyInformation,shippingInformation,returnPolicy,thumbnail,images');

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
    <div className="flex flex-col items-center justify-start min-h-screen overflow-x-hidden w-full">
      <Header />
      <Navbar />
      <Categories />
      <SuggestedProducts />
    </div>
  );
}

export default App;
