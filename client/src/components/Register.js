import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Register() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleRegister = async () => {

        const response = await axios.post('/users/register', data)
        console.log("response",response);

        if (response.data.success) {
            navigate("/login")
        }
        
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
        <button onClick={handleRegister} className="border-2 p-2 w-full hover:bg-red-600 hover:text-white rounded">Register</button>

    </div> 
    );
}

export default Register;