import React from 'react'
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux'

const Products = ({ start, end, category="all", search="" }) => {

    // Subcribing to the redux state to get the products data and status
    const { data: productsData, status: productsStatus } = useSelector(state => state.products);
  
    // Filtering Products Data
    const FilteredProductsData = productsData
      ? productsData
          .filter(product => category === "all" || product.category === category)
          .filter(product =>
            [product.title, product.brand, product.description].some(field =>
              field?.toLowerCase().includes(search.toLowerCase())
            )
          )
      : [];
  
    return (
      <section className="w-full bg-white flex flex-col mt-1">
        <h2 className="w-full border-y-[1.5px] border-gray-300 text-xl text-start font-medium text-slate-800 py-3 pl-8">
          {start==null?"Filtered Products":"Suggested for You"}
        </h2>
        <section className="w-full flex flex-wrap justify-around items-center-safe">
          {productsStatus === "Loading" ? (
            <p className="p-10">Loading</p>
          ) : FilteredProductsData.length > 0 ? (
            FilteredProductsData.slice(start || 0, end || FilteredProductsData.length).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="p-10">No products found.</p>
          )}
        </section>
      </section>
    );
  };
  
export default Products;