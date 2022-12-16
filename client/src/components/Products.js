import React from "react";
import { useContext, useEffect } from 'react';
import {IoMdAddCircle} from 'react-icons/io'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from './Context';
import {MdDeleteForever} from 'react-icons/md'
import {FiEdit} from 'react-icons/fi';


function Products() {

    const {state, dispatchState} = useContext(AppContext)

    console.log(state)

    useEffect(() =>  {

        async function getData() {

            const response = await axios.get('/products/list')
            console.log("getData ~ response", response)

            if (response.data.success) dispatchState({
                type: 'loadProducts',
                payload: response.data.products
            })
        }

        getData()
    }, []) 

    const handleDelete = async (id) => {

        const response = await axios.delete('/products/delete/' + id)
        console.log("Delete ~ response", response)

        if (response.data.success) return dispatchState({
            type: 'removeProduct',
            payload: id
        })

    }

    return ( 
        <div>

        <Link to='/dashboard/products/add'>
            <IoMdAddCircle 
                className='text-[2rem] hover:text-red-500 cursor-pointer'
                
            />
        </Link>
        {
            state.products.map(item => <div key={item._id} className="flex items-center p-4 gap-4"> {item.name} || {item.price}
            <MdDeleteForever className='hover:text-red-500 hover:cursor-pointer'
                onClick={() => handleDelete(item._id)}
                />
                <Link to={'/dashboard/products/edit/' + item._id}>
                    <FiEdit 
                        className='hover:text-red-500 hover:cursor-pointer'
                    />
                </Link>
                </div>)
        }
        </div>
        );
}

export default Products;