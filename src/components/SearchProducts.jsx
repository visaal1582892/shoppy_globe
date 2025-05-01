import React, {useState} from 'react'
import Products from './Products';
import { useSelector } from 'react-redux';
import { useParams,useNavigate } from 'react-router-dom';

const SearchProducts = () => {

    // Selecting All the Categories from redux state
    const categoriesData=useSelector((state)=>state.categories.data);
    const categoriesStatus=useSelector((state)=>state.categories.status);

    // Using useNavigate hook to navigate to the selected category
    const navigate=useNavigate();

    // Dunamic outing for category
    const {category}=useParams();

    // State var for search
    const [search, setSearch] = useState('');
    
  return (
        <section className='w-[100%]'>
            {categoriesStatus==="Loading"?<p className='p-10'>Loading</p>:categoriesStatus==="Error"?<p className='p-10 text-xl text-red-500 font-semibold'>Error: Failed to fetch data from API</p>:
            <form action="." method="post" className='flex flex-col items-center w-[100%] text-orange-500 font-medium p-7 bg-white justify-around text-sm sm:flex-row sm:justify-around gap-7'>
                <label className='flex items-center w-[90%] justify-center sm:w-lg gap-2'>
                    <img src="/images/searchIcon.png" alt="searchIcon" className='w-8'/>
                    <input type="text" placeholder='Search books or authors' name='search' className='border-2 border-blue-300 rounded-lg px-2 py-1 placeholder:text-gray-400/60 outline-none font-medium ml-3 w-[80%] hover:border-blue-500 focus:border-blue-500' value={search} onInput={(event) => setSearch(event.target.value)}/>
                </label>
                <label className='flex items-center justify-around w-[90%] sm:w-md font-medium'>
                    <p className='text-blue-500'>Filter By</p>
                    <select name="category" value={category} onChange={(e)=>navigate(`/products/${e.target.value}`)} className='border-2 border-blue-300 rounded-lg px-2 py-1 placeholder:text-gray-400/60 outline-none font-medium ml-1 hover:border-blue-500 focus:border-blue-500 w-[80%]' >
                        <option value="all">All</option>
                        {categoriesData.map((categoryObj, index) => <option key={index} value={categoryObj.slug}>{categoryObj.name}</option>)}
                    </select>
                </label>
            </form>}
            <section className='w-[100%] flex flex-col items-center justify-start '>
                <Products category={category} search={search} />
            </section>
        </section>
  )
}

export default SearchProducts