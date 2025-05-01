import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-slate-200 h-[5.5vh] shadow-lg shadow-black/20 text-blue-600 flex items-center justify-end border-b-[1px] border-gray-300 w-[100%] sm:justify-between sticky top-0 z-50'>
        <blockquote className='hidden mr-auto ml-20 text-xs tracking-wider font-semibold sm:block'>"The best things in life are just a click away."</blockquote>

        {/* Link to home */}
        <Link to="/" className='mr-10 nav-link text-sm'>Home</Link>

        {/* Link to products */}
        <Link to="/products/all" className='mr-10 nav-link text-sm'>Products</Link>

        {/* Link to cart */}
        <Link to="/cart" className='mr-10 nav-link text-sm sm:hidden'>Cart</Link>
    </nav>
  )
}

export default Navbar