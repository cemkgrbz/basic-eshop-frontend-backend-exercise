import React, { useContext, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { AppContext } from "./Context";

function AddProduct() {

    const navigate = useNavigate();

    const {dispatchState} = useContext(AppContext)

    const [data, setData] = useState({
        name: '',
        price: 0,
        image: '',
        description: '',
        sizes: []

    });

    const [file, setFile] = useState(null)

    const handleSave = async () => {

        const formdata = new FormData()

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

        const response = await axios.post('/products/add', formdata, config)
        console.log("response",response);

        if (response.data.success) {

            dispatchState({
                type: "addProduct",
                payload: response.data.product
            })
            navigate("/dashboard/products")
        }
        
    }

    const handleChange = e => {

        console.log("handleChange", e.currentTarget.files[0])

        const url = URL.createObjectURL(e.currentTarget.files[0])

        setData({...data, image: url})
        setFile(e.currentTarget.files[0])


    }

    return (
    <div className="flex flex-col w-fit gap-[2rem] items-center m-auto mt-[6rem] mb-[4rem] bg-red-600 p-5 text-white ">
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

        <button onClick={handleSave} className="border-2 p-2 w-full hover:bg-slate-800 hover:text-white rounded">Save</button>

    </div> 
    );
}

export default AddProduct;

//1.23