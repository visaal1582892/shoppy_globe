import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex sm:justify-start items-center h-[15vh] bg-blue-600 text-gray-100 justify-center w-[100%]'>
      <img src="/images/mainIcon.png" alt="mainIcon" className='size-12 inline mr-2 sm:ml-25' />
        <h1 className='text-3xl font-medium'>Shoppy <span className='text-yellow-400'>Globe</span></h1>
        <Link to='/cart' className='sm:mr-15 mr-5 sm:flex justify-center items-center text-lg font-medium ml-auto hidden hover:scale-110 transition-all duration-200'><img src="/images/cartIcon.png" alt="cartIcon" className='size-6 mr-2' /> Cart</Link>
    </header>
  )
}

export default Header