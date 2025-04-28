import React from 'react'
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux'

const SuggestedProducts = () => {

    const randomNum=Math.round(Math.random()*40+50);
    const suggestedProductsData=useSelector((state)=>state.products.data);
    const suggestedProductsStatus=useSelector((state)=>state.products.status);

  return (
    <section className='w-[100%] bg-white flex flex-col mt-1'>
        <h2 className='w-[100%] border-y-[1.5px] border-gray-300 text-xl text-start font-medium text-slate-800 py-3 pl-8'>Suggested for You</h2>
        <section className='w-[100%] flex flex-wrap justify-around items-center-safe
        '>
            {suggestedProductsStatus==="Loading"?<p className='p-10'>Loading</p>:
            suggestedProductsData.slice(randomNum,randomNum+20).map((product, index) => <ProductCard key={product.id} product={product} />)
}
        </section>
    </section>
  )
}

export default SuggestedProducts