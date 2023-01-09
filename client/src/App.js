import { useContext, useEffect, useState } from 'react';
import HeaderUser from './components/HeaderUser'
import axios from 'axios'
import {AppContext} from './components/Context'
import CardBuyers from './components/CardBuyers'
import {FaFilter} from 'react-icons/fa'
import {RiFilterOffFill} from 'react-icons/ri'

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function currency(value) {
  return `${value}€`;
}

function App() {
  const {state, dispatchState} = useContext(AppContext)
  const [total, setTotal] = useState(0)

  const [filter, setFilter] = useState({
    name: '',
    minPrice: 0,
    maxPrice: 0
  })

  const [priceRange, setPriceRange] = useState([0, 0])

  const getData = async () => {

    const response = await axios.get('/products/list')
    console.log("🚀 ~ getData ~ response", response)

    if (response.data.success) {

      dispatchState({
      type: 'loadProducts',
      payload: response.data.products
    })

    setTotal(response.data.total)

  }
  }

  useEffect(() => {

    getData()
  }, [])



  const handleLoadMore = async () => {

    const response = await axios.get('/products/list?skip=' + state.products.length)
      console.log("🚀 ~ getData ~ response", response)

      if (response.data.success) {

        dispatchState({
        type: 'addProducts',
        payload: response.data.products
      })

      setTotal(response.data.total)

    }
  }

  const handleApplyFilter = async () => {

    const response = await axios.post('/products/search' , filter)
    console.log("🚀 ~ handleApplyFilter ~ response", response)

    if (response.data.success) {

      dispatchState({
      type: 'loadProducts',
      payload: response.data.products
    })

    setTotal(response.data.total)

  }
  }

  const handlePriceRangeChange = (e, range) => {
  console.log("🚀 ~ handlePriceRangeChange ~ range", e.target.value)
  console.log("🚀 ~ handlePriceRangeChange ~ range", range)

    setFilter({...filter, minPrice: range[0], maxPrice: range[1]})
    setPriceRange(range)
  }

  const handleResetFilter = () => {

    setFilter({
      name: '',
      minPrice: 0,
      maxPrice: 0
    })

    setPriceRange([0, 0])

    getData()
  }

  // console.log("🚀 ~ App ~ state", state)

  const a = {}
  const b = {}

  console.log('a = b', a === b)

  return (
    <div className='w-full bg-slate-50 min-h-[100vh] py-[20px] flex flex-col items-center justify-start'>
      <HeaderUser />
      <div className='flex items-top justify-center w-[80%] m-auto'>

      <div className='w-[20%] bg-slate-600 py-[20px] flex flex-col justify-start items-center gap-[20px] text-white'>
        <h5>Filters</h5>
        <input 
          type="text" 
          id="base-input" 
          placeholder='Search product names'
          onChange={e => setFilter({...filter, name: e.target.value})}
          value={filter.name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

          <span>Price Range</span>
          <Box sx={{ width: '80%' }}>
            <Slider
              getAriaLabel={() => 'Price range'}
              value={priceRange}
              onChange={handlePriceRangeChange}
              valueLabelDisplay="auto"
              getAriaValueText={currency}
            />
          </Box>

          <button 
            type="button" 
            onClick={handleApplyFilter}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <FaFilter />
            Apply filter
          </button>
          <button 
            type="button" 
            onClick={handleResetFilter}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <RiFilterOffFill />
            Reset filter
          </button>
      </div>
      <div className='flex items-top w-[80%] min-h-[80vh] gap-[20px] flex-wrap p-[20px]'>

      
      {
        state.products.map(item => <CardBuyers key={item._id} product={item}/>)
      }

        </div>
    </div>
    <div className='flex justify-center'>
      {  
        state.products.length > 0 && 
        state.products.length < total ?

        <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleLoadMore}
          >Load more</button>

          : 'No more products to load'
        }

    </div>
  </div>
  );
}

export default App;
