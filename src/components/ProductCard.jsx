import React from 'react'

const ProductCard = ({product}) => {
  return (
    <article className='flex flex-col justify-around items-center-safe w-30 h-60'>
        <img src={product.thumbnail} alt="productImage" className='w-[100%]' />
        <h3 className='text-ellipsis line-clamp-2 font-extralight'>{product.title}</h3>

    </article>
  )
}

export default ProductCard