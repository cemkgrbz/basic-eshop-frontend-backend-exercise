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

    const [file, setFile] = useState(null)


    const {dispatchState} = useContext(AppContext)

    useEffect(() => {

        async function getData(){

            const response = await axios.get('/products/findone?_id=' + id)

            console.log("response", response)

            if (response.data.success) {
              
                if (response.data.product.image) {response.data.product.image = '/images/' + response.data.product.image}
  
                setData(response.data.product)}
            
        }

        getData()
    }, [])

    const handleSave = async() => {

        const formdata = new FormData()

        formdata.set('_id', data._id)
        formdata.set('name', data.name)
        formdata.set('price', data.price)
        formdata.set('description', data.description)
        formdata.set('sizes', data.sizes)

        formdata.set('image', file, 'somefilename')

        const config = {
            Headers: {
              'content-type': 'multipart/form-data'
            }
          }

        const response = await axios.post('/products/edit', formdata, config)
        console.log(response)

        if (response.data.success) dispatchState({

            type: 'editProduct',
            payload: response.data.product
        }) 
        navigate('/dashboard/products')
    }

    const handleChange = e => {

        console.log("handleChange", e.currentTarget.files[0])

        const url = URL.createObjectURL(e.currentTarget.files[0])

        setData({...data, image: url})
        setFile(e.currentTarget.files[0])

    }

    return ( 
    <div>
        <div className="flex flex-col gap-[2rem] w-fit items-center m-auto mt-[6rem] bg-slate-900 p-5 text-white mb-[3rem]">
            <div className="flex flex-col gap-[2rem] items-end">
                    <label>
                    Product Name: <input value={data.username} onChange={e => setData({...data, name: e.target.value})} className="border-2 rounded text-black" />
                </label>
                <label>
                    Price: <input value={data.email} onChange={e => setData({...data, price: e.target.value})} className="border-2 rounded text-black"/>
                </label>
                <label>
                    Description: <input value={data.password} onChange={e => setData({...data, description: e.target.value})} className="border-2 rounded text-black"/>
                </label>
            </div>
        

        <label className="cursor-pointer border-2 rounded p-2 bg-slate-700">
            Choose Image 
            <input type="file" className="hidden" onChange={handleChange}/>
        </label>

        <img src={data.image} alt="" className="w-[300px]"/>

        <button onClick={handleSave} className="border-2 p-2 w-full hover:bg-red-800 hover:text-white rounded">Save</button>

    </div> 
    </div> );
}

export default EditProduct;