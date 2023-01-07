import HeaderUser from './HeaderUser'
import CardBuyers from './CardBuyers'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react';
import { AppContext } from './Context';
import CartCard from './CartCard';

function Cart() {

    const {state, dispatchState} = useContext(AppContext)

    return ( 
        <div className='flex items-center w-full h-[100vh] flex-col gap-[20px]'>
        <HeaderUser />
      {
        state.user?.cart?.map((item, idx) => <CartCard key={idx} product={item} />)
      }
  
      </div> 
    );
}

export default Cart;