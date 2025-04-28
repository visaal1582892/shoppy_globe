import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-200 h-[5.5vh] shadow-lg shadow-black/20 text-blue-600 flex items-center justify-end border-b-[1px] border-gray-300 w-[100%] sm:justify-between z-10 fixed top-[15vh] inset-x-0'>
        <blockquote className='hidden mr-auto ml-20 text-xs tracking-wider font-semibold sm:block'>"The best things in life are just a click away."</blockquote>
        <a href="." className='mr-10 nav-link text-sm'>Home</a>
        <a href="." className='mr-10 nav-link text-sm'>Products</a>
        <a href="." className='mr-10 nav-link text-sm sm:hidden'>Cart</a>
    </nav>
  )
}

export default Navbar