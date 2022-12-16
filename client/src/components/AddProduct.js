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
        description: ''
    });

    const handleSave = async () => {

        const response = await axios.post('/products/add', data)
        console.log("response",response);

        if (response.data.success) {

            dispatchState({
                type: "addProduct",
                payload: response.data.product
            })
            navigate("/dashboard/products")
        }
        
    }

    return (
    <div className="flex flex-col gap-[2rem] w-fit items-end m-auto mt-[10rem] bg-red-600 p-5 text-white ">
        <label>
            Product Name: <input value={data.username} onChange={e => setData({...data, name: e.target.value})} className="border-2 rounded text-black" />
        </label>
        <label>
            Price: <input value={data.email} onChange={e => setData({...data, price: e.target.value})} className="border-2 rounded text-black"/>
        </label>
        <label>
            Description: <input value={data.password} onChange={e => setData({...data, description: e.target.value})} className="border-2 rounded text-black"/>
        </label>
        <label>
            <input type="file" />
        </label>
        <button onClick={handleSave} className="border-2 p-2 w-full hover:bg-slate-800 hover:text-white rounded">Save</button>

    </div> 
    );
}

export default AddProduct;

//1.23