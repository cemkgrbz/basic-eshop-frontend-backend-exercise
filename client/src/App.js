import HeaderUser from './components/HeaderUser'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react';
import { AppContext } from './components/Context';
import CardBuyers from './components/CardBuyers'



function App() {

  const {state, dispatchState} = useContext(AppContext)

  console.log("app - state", state)

  const [total, setTotal] = useState(0)

  useEffect(() => {

    const getData = async () => {

      const response = await axios.get('products/list')
      console.log(response)

      if (response.data.success) 
      
        dispatchState({
          type: 'loadProducts',
          payload: response.data.products
        })

      setTotal(response.data.total)

    }

    getData()
  }, [])

  const handleLoadMore = async () => {

    const response = await axios.get('products/list?skip=' + state.products.length)
      console.log(response)

      if (response.data.success) 
      
        dispatchState({
          type: 'addProducts',
          payload: response.data.products
        })

      setTotal(response.data.total)

    console.log("handleLoadMore")
    
  }

  return (
    <div className='flex items-center w-full h-[100vh] flex-col gap-[20px]'>
      <HeaderUser />
    {
      state.products.map(item => <CardBuyers key={item._id} product={item} />)
    }

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
  );
}

export default App;
