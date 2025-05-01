import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addToCart,incrementQuantity,decrementQuantity,removeFromCart } from '../utils/cartSlice';
import { setSuccess, setError, setIdeal } from "../utils/responseSlice";

const ProductCard = ({product}) => {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  // Function To handle Add to cart button click
  const handleAddToCart=(e)=>{
    // Prevent triggering the onClick event of the parent element
    e.stopPropagation(); 

    // Adding to cart
    dispatch(addToCart({id: product.id, title: product.title, brand: product.brand, price: product.price, discountPercentage: product.discountPercentage, stock: product.stock, thumbnail: product.thumbnail, warrantyInformation: product.warrantyInformation, shippingInformation: product.shippingInformation, returnPolicy: product.returnPolicy, reviews: product.reviews}));
    
    // Response Handled
    dispatch(setSuccess("Product Added to Cart Succesfully Visit Cart to Checkout"));
    setTimeout(()=>dispatch(setIdeal()),3500);
  }

  const handleIncrement=(e)=>{

    // Prevent triggering the onClick event of the parent element
    e.stopPropagation();

    if(product.quantity>=product.stock){
      // Response Handled
      dispatch(setError("No more stock available to add to Cart"));
      setTimeout(()=>dispatch(setIdeal()),3500);
    }
    else{
      dispatch(incrementQuantity(product.id));
    }
  }

  const handleDecrement =(e) =>{

    // Prevent triggering the onClick event of the parent element
    e.stopPropagation();

    if(product.quantity<=1){
      dispatch(removeFromCart(product.id));

      // Response Handled
      dispatch(setSuccess("Product Removed from cart."));
      setTimeout(()=>dispatch(setIdeal()),3500);
    }
    else{
      dispatch(decrementQuantity(product.id));
    }
  }

  return (
    <article className='flex flex-col justify-start items-center-safe w-45 h-80 p-2 hover:cursor-pointer hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.2)] group space-y-2' onClick={() => navigate(`/product/${product.id}`)}>

        {/* image and stock details */}
        <figure className='w-[100%] flex flex-col justify-center items-center-safe relative'>
          <img src={product.thumbnail} alt="productImage" className='w-[100%]' loading='lazy' />
          <figcaption className='absolute bottom-0 text-red-500 text-sm font-semibold'>{product.stock>0 && product.stock<=15?`Only ${product.stock} left`:product.stock==0?`No Stock`:null}</figcaption>
        </figure>

        {/* Main heading for cart */}
        <h3 className='text-ellipsis line-clamp-2 font-extralight text-center text-sm group-hover:text-blue-500'>{product.title}</h3>

        {/* Logic to handle cart and normal product cards */}
        {product.quantity?null:<p className='text-xs bg-green-600 text-white p-1 flex items-center justify-center rounded-sm'>{product.rating} <img src="/images/starIcon.png" alt="starIcon" className='size-[1em] inline-block ml-1' /></p>}

        {/* Price details */}
        <p className='text-center font-semibold text-sm break-after-all'>${(product.price*((100-product.discountPercentage)/100)).toFixed(2)}<span className='align-text-baseline text-[0.9em] line-through font-medium text-gray-700 mx-2 break-all'>${product.price}</span><span className='text-green-500 font-semibold text-[0.9em]'>{product.discountPercentage}% off</span></p>

        {/* Cart quantity and add to cart button */}
        {product.quantity?<section className='flex flex-col items-center justify-center w-[100%] gap-2'>
          <section className='flex items-center justify-around w-[100%] bg-gray-200 rounded-md p-1'>

            {/* Decrement button */}
            <button className='text-red-600 text-xl w-[33%] hover:cursor-pointer' onClick={(e) => handleDecrement(e)}>-</button>

            {/* Quantity display */}
            <p className='font-medium'>{product.quantity}</p>

            {/* Incerement button */}
            <button className='text-green-600 text-xl w-[33%] cursor-pointer' onClick={(e) => handleIncrement(e)}>+</button>
          </section>
          <button className='bg-blue-600 text-white font-semibold text-sm px-2 py-1 rounded-md hover:bg-blue-500 transition-all duration-200 cursor-pointer' onClick={(e) => {
            // Prevent triggering the onClick event of the parent element
            e.stopPropagation(); 

            // Removing from cart
            dispatch(removeFromCart(product.id));

            // Response Handled
            dispatch(setSuccess("Product Removed from cart succesfully."));
            setTimeout(()=>dispatch(setIdeal()),3500);
          }}>Remove from Cart</button>
        </section>
        :
        // Button To add item to cart
        <button className='bg-blue-600 text-white font-semibold text-sm px-2 py-1 rounded-md hover:bg-blue-500 transition-all duration-200 cursor-pointer' onClick={(e) => handleAddToCart(e)}>Add to Cart</button>}
    </article>
  )
}

export default ProductCard