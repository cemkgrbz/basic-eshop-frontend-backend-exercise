import React from "react";
import { useContext, useEffect } from 'react';
import {IoMdAddCircle} from 'react-icons/io'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from './Context';


function Products() {

    const {state, dispatchState} = useContext(AppContext)

    console.log(state)

    useEffect(() =>  {

        async function getData() {

            const response = await axios.get('/products/list')
            console.log("🚀 ~ getData ~ response", response)

            if (response.data.success) dispatchState({
                type: 'loadProducts',
                payload: response.data.products
            })
        }

        getData()
    }, [])

    return ( 
        <div>

        <Link to='/dashboard/products/add'>
            <IoMdAddCircle 
                className='text-[2rem] hover:text-red-500 cursor-pointer'
                
            />
        </Link>
        {
            state.products.map(item => <div key={item._id}> {item.name} || {item.price}</div>)
        }
        </div>
        );
}

export default Products;