import React from 'react'
import Categories from './Categories';
import Products from './Products';

const Home = () => {

    // Generating a random number between 0 and 100
    const randomNum=Math.round(Math.random()*40+50);

  return (
    <section className='w-[100%] flex flex-col items-center justify-start '>
        <Categories />

        {/* Displaying any 20 products randomly from the list of 194products. */}
        <Products start={randomNum} end={randomNum+20} />
    </section>
  )
}

export default Home