import React from 'react'
import { useSelector } from 'react-redux'
import { useParams,useNavigate } from 'react-router-dom'

const ProductDetails = () => {

    // Extracting id from URL using useParams
    const { id } = useParams();
    const navigate=useNavigate();

    // Retrieving Product details from products data using useSelector
    const product=useSelector((state) => {
        return state.products.data?.filter((product) => product.id == id)[0];
    });

    const productStatus=useSelector((state) => state.products.status);

  return (
    productStatus=="Loading"?<p className='flex justify-center items-center text-xl text-slate-900 h-[50vh] text-center w-[100%]'>Loading...</p>:<article className='flex flex-col bg-white w-[95%] justify-between items-center md:flex-row p-5 rounded-xl md:flex-wrap mt-2 md:items-start'>

            {/* Back to Search Button */}
            <section className='w-[100%] h-15'>
                <button className='bg-blue-600 text-white font-semibold text-sm px-2 py-1 rounded-md hover:bg-blue-500 transition-all duration-200 cursor-pointer' onClick={()=>navigate('/products/all')}>← Back to Search</button>
            </section>

            {/* product Image */}
            <img src={product.thumbnail} className='w-[60%] md:w-[30%]'/>

            {/* Details Section */}
            <section className='text-black w-[100%] md:w-[70%] grid grid-cols-4 items-center'>

                {/* Title */}
                <h2 className='text-slate-900 text-2xl col-span-4 text-start font-medium mb-1'>{product.title}</h2>

                {/* Brand */}
                {product.brand?<h2 className='text-blue-500 text-xl col-span-4 text-start font-medium mb-3'>{product.brand}</h2>:null}

                <section className='col-span-4 flex flex-row items-start justify-start gap-4 mb-3'>
                    {/* Rating */}
                    <p className='font-medium text-xs bg-green-600 text-white p-1 flex items-center justify-center rounded-sm w-12'>{product.rating} <img src="/images/starIcon.png" alt="starIcon" className='size-[1em] inline-block ml-1' /></p>

                    {/* Stock Details */}
                    <p className={`font-medium ${product.stock>15?"text-green-600":product.stock==0?"text-red-600":"text-red-500"}`}>{product.stock>15?"In Stock":product.stock==0?"Out Of Stock":`Only ${product.stock} Left`}</p>
                </section>

                {/* Price details */}
                <p className='col-span-4 font-semibold text-md break-after-all mb-3'>${(product.price*((100-product.discountPercentage)/100)).toFixed(2)}<span className='align-text-baseline text-[0.9em] line-through font-medium text-gray-700 mx-2 break-all'>${product.price}</span><span className='text-green-500 font-semibold text-[0.9em]'>{product.discountPercentage}% off</span></p>

                {/* Description */}
                <p className='text-gray-600 text-sm col-span-4 mb-2'>{product.description}</p>

                {/* Warranty Deatails */}
                {product.warranty?<p className='text-gray-600 text-sm col-span-4 mb-2'><label className='text-blue-500 font-medium'>Warranty Details:</label> {product.warranty}</p>:null}

                {/* Shipping Information */}
                {product.shippingInformation?<p className='text-gray-600 text-sm col-span-4 mb-2'><label className='text-blue-500 font-medium'>Shipping Information:</label> {product.shippingInformation}</p>:null}

                {/* Return Policy */}
                {product.returnPolicy?<p className='text-gray-600 text-sm col-span-4 mb-4'><label className='text-blue-500 font-medium'>Return Policy:</label> {product.returnPolicy}</p>:null}

                {/* Reviews */}
                {product.reviews?<section className='col-span-4 flex flex-col items-start justify-start gap-2 mb-3'>
                    <h2 className='text-blue-500 text-lg text-start font-medium mb-2'>Reviews </h2>
                    <section className='flex flex-col items-start justify-start gap-4 mb-3 w-[100%]'>
                        {product.reviews.map((review,index)=><article key={index} className='bg-gray-200 grid grid-cols-5 text-sm p-3 rounded-lg w-[100%] sm:w-lg'>

                            {/* Rating */}
                            <h4 className='text-slate-900 font-medium break-words col-span-2'>Rating: </h4>
                            <p className='font-lighter col-span-3 break-words'>{review.rating}</p>

                            {/* Comment */}
                            <h4 className='text-slate-900 font-medium break-words col-span-2'>Comment: </h4>
                            <p className='font-lighter col-span-3 break-words'>{review.comment}</p>

                            {/* Review date */}
                            <h4 className='text-slate-900 font-medium break-words col-span-2'>Date: </h4>
                            <p className='font-lighter col-span-3 break-words'>{review.date.slice(0,10)}</p>

                            {/* Reviewer Name */}
                            <h4 className='text-slate-900 font-medium break-words col-span-2'>Name: </h4>
                            <p className='font-lighter col-span-3 break-words'>{review.reviewerName}</p>

                            {/* Review Email */}
                            <h4 className='text-slate-900 font-medium break-words col-span-2'>Email: </h4>
                            <p className='font-lighter col-span-3 break-words'>{review.reviewerEmail}</p>

                            

                        </article>)}
                    </section>
                </section>:null}
            </section>
        </article>
  )
}

export default ProductDetails