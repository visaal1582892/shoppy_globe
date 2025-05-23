import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Categories = () => {
    const categoriesData=useSelector((state)=>state.categories.data);
    const categoriesStatus=useSelector((state)=>state.categories.status);
    // console.log(categoriesData);
  return (
    <section className='w-[100%] bg-white flex justify-center-safe items-center-safe overflow-x-auto border-b-[1px] border-gray-300'>
        {categoriesStatus==="Loading"?<p className='p-10'>Loading...</p>:
        <section className='grid grid-flow-col grid-rows-2 items-center'>
            {categoriesData.map((category, index) => <Link key={index} to={`/products/${category.slug}`} className='nav-link text-center text-xs w-[100%] h-[100%] p-3 flex justify-center-safe items-center-safe'>{category.name}</Link>)}
        </section>}
    </section>
  )
}

export default Categories