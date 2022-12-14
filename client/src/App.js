import React, { useContext, useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { AppContext } from './components/Context'


function Login() {

    const navigate = useNavigate();
    const {state, dispatchState} = useContext(AppContext);

    const [data, setData] = useState({
        email: '',
        password: ''
      })
    
      const handleLogin = async () => {
    
        const response = await axios.post('/users/login', data)
        console.log("handleLogin ~ response", response)

        if (response.data.success) {
          dispatchState({
            type: 'login',
            payload: response.data.user
          });

          navigate('/dashboard')
        } else {

          if (response.data.errorId === 1) alert('Wrong email or password')
    
      }
      }

      return (
        <div className="flex flex-col gap-[2rem] w-fit items-end m-auto mt-[10rem] bg-slate-800 p-5 text-white ">
            <label>
                E-mail: <input value={data.email} onChange={e => setData({...data, email: e.target.value})} className="border-2 rounded text-black"/>
            </label>
            <label>
                Password: <input value={data.password} onChange={e => setData({...data, password: e.target.value})} className="border-2 rounded text-black"/>
            </label>
            <button onClick={handleLogin} className="border-2 p-2 w-full hover:bg-red-600 hover:text-white rounded">Login</button>
            <Link to={"/register"}><div>Register</div></Link>

    
        </div> 
        );
}

export default Login;