import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "./Context";


function EditProduct() {

    const {id} = useParams();
    const navigate = useNavigate();


    const [data, setData] = useState({
        name: '',
        price: 0,
        image: '',
        description: '',
        sizes: []
    })

    const {dispatchState} = useContext(AppContext)

    useEffect(() => {

        async function getData(){

            const response = await axios.get('/products/findone?_id=' + id)

            console.log("response", response)

            if(response.data.success) setData(response.data.product)
            
        }

        getData()
    }, [])

    const handleSave = async() => {

        const response = await axios.post('/products/edit', data)
        console.log(response)

        if (response.data.success) dispatchState({

            type: 'editProduct',
            payload: response.data.product
        }) 
        navigate('/dashboard/products')
    }

    return ( 
    <div>
        <div className="flex flex-col gap-[2rem] w-fit items-end m-auto mt-[10rem] bg-slate-900 p-5 text-white ">
        <label>
            Product Name: <input value={data.username} onChange={e => setData({...data, name: e.target.value})} className="border-2 rounded text-black" />
        </label>
        <label>
            Price: <input value={data.email} onChange={e => setData({...data, price: e.target.value})} className="border-2 rounded text-black"/>
        </label>
        <label>
            Description: <input value={data.password} onChange={e => setData({...data, description: e.target.value})} className="border-2 rounded text-black"/>
        </label>
        <button onClick={handleSave} className="border-2 p-2 w-full hover:bg-red-800 hover:text-white rounded">Save</button>

    </div> 
    </div> );
}

export default EditProduct;