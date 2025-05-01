import React from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSuccess, setError, setIdeal } from "../utils/responseSlice";
import ProductCard from './ProductCard';

const Cart = () => {

    const cartProducts=useSelector((state)=>state.cart);
    const navigate=useNavigate();
    const dispatch=useDispatch();

  return (
    <section className="w-full bg-white flex flex-col min-h-[85vh]">
        <h2 className="w-full border-y-[1.5px] border-gray-300 text-xl text-start font-medium text-slate-800 py-3 flex justify-between items-center">
          <label className='ml-10'>Cart Products</label>
          <button className='bg-blue-600 text-white font-semibold text-sm px-2 py-1 rounded-md hover:bg-blue-500 transition-all duration-200 cursor-pointer mr-8' onClick={()=>{
            navigate('/checkout');

            // Handling Response
            dispatch(setSuccess("You have successfully checked out your products."));
            setTimeout(()=>dispatch(setIdeal()),3500);
          }}>Check Out</button>
        </h2>
        <section className='w-full flex flex-wrap justify-around items-center-safe'>
            {cartProducts && Object.keys(cartProducts).length > 0 ? Object.values(cartProducts).map((product) => <ProductCard key={product.id} product={product} />) : <p className='p-10'>No products found in Cart.</p>}
        </section>
    </section>
  )
}

export default Cart