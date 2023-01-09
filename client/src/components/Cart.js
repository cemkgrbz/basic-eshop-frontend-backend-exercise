import { useContext, useEffect, useState } from 'react';

import HeaderUser from './HeaderUser'
import axios from 'axios'
import {AppContext} from './Context'
import CartCard from './CartCard'

function Cart() {

    const {state, dispatchState} = useContext(AppContext)

    const [cart, setCart] = useState([])

    const handleDeleteLocally = (id) => {

      const oldData = cart.filter( item => item.product._id !== id)

      setCart(oldData)
    }

    useEffect(() => {

        async function getData() {

            const response = await axios.get('/users/listcart/' + state.user._id)

            console.log("🚀 ~ getData ~ response", response)

            if (response.data.success) setCart([...response.data.products])
        }

        getData()
    }, [])

    return ( 
        <div className='flex items-center w-full h-[100vh] bg-slate-50 flex-col gap-[20px]'>
      <HeaderUser />

      {
        cart.length ? 
          cart.map((item, idx) => <CartCard 
            key={idx} 
            product={item}
            cbDelete={handleDeleteLocally}  
          />)
          :
          'Your cart is empty'
      }


    </div>
     );
}

export default Cart;