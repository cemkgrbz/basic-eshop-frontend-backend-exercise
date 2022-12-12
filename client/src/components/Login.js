import React, { useState } from "react";
import axios from 'axios'


function Login() {

    const [data, setData] = useState({
        username: '',
        email: '',
        password: ''
      })
    
      const handleRegister = async () => {
    
        const response = await axios.post('/users/register', data)
        console.log("🚀 ~ handleRegister ~ response", response)
      }

    return ( <div className='flex justify-center items-center w-full h-[100vh] bg-slate-50 flex-col gap-[20px]'>
    <label>
    Username: <input 
      value={data.username} 
      onChange={e => setData({...data, username: e.target.value}) } 
      className='border-slate-500 border-2 p-[10px] w-[250px] hover:bg-red-100'
      />
    </label>
    <label>
    email: <input 
      value={data.email} 
      onChange={e => setData({...data, email: e.target.value}) } 
      className='border-slate-500 border-2 p-[10px] w-[250px] hover:bg-red-100'
      />
    </label>
    <label>
    password: <input 
      value={data.password} 
      onChange={e => setData({...data, password: e.target.value}) } 
      className='border-slate-500 border-2 p-[10px] w-[250px] hover:bg-red-100'
      />
    </label>
    <button  className='border-slate-500 border-2 p-[10px] w-[250px] hover:bg-red-100'onClick={handleRegister}>Register</button>


  </div>);
}

export default Login;