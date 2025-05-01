import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Checkout = () => {

    const navigate=useNavigate();

    // Selecting cart products from redux store
    const cartProducts=useSelector((state)=>state.cart);

  return (
    <section className='w-[100%] flex flex-col items-center justify-start bg-white'>
        {cartProducts && Object.keys(cartProducts).length > 0 ? 
        <section className='flex flex-col items-center justify-start mt-5 w-[100%] min-h-[78vh] gap-3 px-5'>
            <p className='text-lg font-medium'>You have successfully checked out with below Products.</p>
            <button className='bg-blue-600 text-white font-semibold text-sm px-2 py-1 rounded-md hover:bg-blue-500 transition-all duration-200 cursor-pointer' onClick={()=>navigate('/cart')}>← Back to Cart</button>
            <section className='bg-gray-300 grid grid-cols-6 w-[100%] p-3 rounded-md mt-4 sm:w-md mb-5'>
                <label className='font-medium col-span-4 text-center'>Product</label>
                <label className='font-medium col-span-2 break-words text-center'>Amount</label>
                {Object.values(cartProducts).map((product) => {
                    return <section className='grid grid-cols-subgrid col-span-6 items-center'>
                        <Link to={`/product/${product.id}`} className='flex flex-row items-center justify-center gap-2 col-span-4 p-2 text-slate-900 hover:bg-gray-200 bg-white rounded-md mr-3 my-3 hover:text-blue-500'>
                            <img src={product.thumbnail} alt={product.title} className='w-10 h-10' />
                            <h2 className='text-lg'>{product.title}</h2>
                        </Link>
                        <label className='font-semibold col-span-2 break-words p-2 text-center'>{product.quantity}</label>
                    </section>
                })}
            </section>
        </section>:
        <section className='flex flex-col items-center justify-start mt-27 w-[100%] h-[80vh] gap-3 px-5'>
        <img src="/images/emptyCartIcon.png" alt="emptyCartIcon" className='size-30' />
        <h2 className='text-2xl font-medium'>Your cart is empty</h2>
        <p className='text-lg font-medium text-center'>Looks like you haven't added anything to your cart yet.</p>
        <button className='bg-blue-600 text-white font-semibold text-sm px-2 py-1 rounded-md hover:bg-blue-500 transition-all duration-200 cursor-pointer' onClick={()=>navigate('/products/all')}>← Back to Search</button>
    </section>}
    </section>
  )
}

export default Checkout