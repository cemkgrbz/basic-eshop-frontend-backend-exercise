import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";



function EditUser() {

    const navigate = useNavigate();

    const {id} = useParams();

    const [data, setData] = useState({
        email: '',
        username: '',
        password: ''
    })

    useEffect(() => {
        async function getData() {

            const response = await axios.get('/users/findone/' + id)

            console.log("response", response)
            
            if (response.data.success) setData(response.data.user)
        }

        getData();
    }, [])

    const handleSave = async () => {

        const response = await axios.patch('/users/edit', data)
    }

    return (
        <div className="flex flex-col gap-[2rem] w-fit items-end m-auto mt-[10rem] bg-slate-800 p-5 text-white ">
            <label>
                Username: <input value={data.username} onChange={e => setData({...data, username: e.target.value})} className="border-2 rounded text-black" />
            </label>
            <label>
                E-mail: <input value={data.email} onChange={e => setData({...data, email: e.target.value})} className="border-2 rounded text-black"/>
            </label>
            <label>
                Password: <input value={data.password} onChange={e => setData({...data, password: e.target.value})} className="border-2 rounded text-black"/>
            </label>
            <button onClick={handleSave} className="border-2 p-2 w-full hover:bg-red-600 hover:text-white rounded">Save</button>
    
        </div> 
        );
}

export default EditUser;